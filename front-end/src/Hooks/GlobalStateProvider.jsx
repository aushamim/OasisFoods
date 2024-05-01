import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  // const APIHost  = "https://oasisfoods.onrender.com"
  const APIHost = "http://127.0.0.1:8000";

  const [allProducts, setAllProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  const [allProductsLoading, setAllProductsLoading] = useState(true);
  const [featuredProductsLoading, setFeaturedProductsLoading] = useState(true);
  const [bestSellerProductsLoading, setBestSellerProductsLoading] =
    useState(true);

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

  return (
    <GlobalContext.Provider
      value={{
        APIHost,
        allProducts,
        featuredProducts,
        bestSellerProducts,
        allProductsLoading,
        featuredProductsLoading,
        bestSellerProductsLoading,
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
