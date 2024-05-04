import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  const APIHost = "https://oasisfoods.onrender.com";
  // const APIHost = "http://127.0.0.1:8000";

  const [user, setUser] = useState(
    parseInt(localStorage.getItem("user_id")) || null
  );
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [productQuickView, setProductQuickView] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [sale, setSale] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const [allProductsLoading, setAllProductsLoading] = useState(true);
  const [featuredProductsLoading, setFeaturedProductsLoading] = useState(true);
  const [bestSellerProductsLoading, setBestSellerProductsLoading] =
    useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [saleLoading, setSaleLoading] = useState(true);

  const [cartRefreshTrigger, setCartRefreshTrigger] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const refresh = () => {
    setRefreshTrigger(refreshTrigger ? false : true);
  };

  const addToWishlist = (product) => {
    toast.info(`Coming Soon! Product ID: ${product?.id}`);
  };

  const addToCart = (product, quantity = 0) => {
    if (!user) {
      toast.error("Please login to use cart.");
      return;
    }

    fetch(`${APIHost}/products/cart/?user_id=${user}&product_id=${product?.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          fetch(
            `${APIHost}/products/cart/?user_id=${user}&product_id=${
              product?.id
            }&quantity=${quantity == 0 ? data[0].quantity + 1 : quantity}`,
            {
              method: "POST",
            }
          );
          setCartRefreshTrigger(cartRefreshTrigger ? false : true);
          toast.success("Product Updated");
        } else {
          const promise = () => {
            return fetch(
              `${APIHost}/products/cart/?user_id=${user}&product_id=${product?.id}&add_to_cart=True`,
              {
                method: "POST",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.error) {
                  throw new Error(data.error);
                } else {
                  setCartRefreshTrigger(cartRefreshTrigger ? false : true);
                  return data;
                }
              })
              .catch((error) => {
                throw error;
              });
          };

          toast.promise(promise, {
            loading: `Addng ${product?.name} to cart`,
            success: `${product?.name} added to cart`,
            error: (error) => {
              return error;
            },
          });
        }
      });
  };

  useEffect(() => {
    setAllProductsLoading(true);
    fetch(`${APIHost}/products/all/`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setAllProductsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${APIHost}/products/all-categories/`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setFeaturedProductsLoading(true);
    fetch(`${APIHost}/products/featured/`)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
        setFeaturedProductsLoading(false);
      });
  }, []);

  useEffect(() => {
    setBestSellerProductsLoading(true);
    fetch(`${APIHost}/products/best_seller/`)
      .then((res) => res.json())
      .then((data) => {
        setBestSellerProducts(data);
        setBestSellerProductsLoading(false);
      });
  }, []);

  useEffect(() => {
    setBlogsLoading(true);
    fetch(`${APIHost}/blogs/all/`)
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        setBlogs(data);
        setBlogsLoading(false);
      });
  }, [refreshTrigger]);

  useEffect(() => {
    setSaleLoading(true);
    fetch(`${APIHost}/products/sale/`)
      .then((res) => res.json())
      .then((data) => {
        setSale(data);
        setSaleLoading(false);
      });
  }, []);

  useEffect(() => {
    if (user) {
      fetch(`${APIHost}/products/cart/?user_id=${user}`)
        .then((res) => res.json())
        .then((data) => {
          setCart(data);

          let price = 0;
          for (const index in data) {
            const productPrice =
              parseFloat(data[index]?.product?.price) -
              (parseFloat(data[index]?.product?.price) *
                parseFloat(data[index]?.product?.discount)) /
                100;
            price += productPrice * data[index]?.quantity;
          }
          setCartTotalPrice(parseFloat(price).toFixed(2));
        });
    }
  }, [user, cartRefreshTrigger]);

  return (
    <GlobalContext.Provider
      value={{
        APIHost,
        user,
        setUser,
        refreshTrigger,
        refresh,
        allProducts,
        categories,
        featuredProducts,
        bestSellerProducts,
        blogs,
        allProductsLoading,
        featuredProductsLoading,
        bestSellerProductsLoading,
        blogsLoading,
        productQuickView,
        setProductQuickView,
        addToCart,
        addToWishlist,
        sale,
        saleLoading,
        cart,
        cartTotalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStateProvider;
