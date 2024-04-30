import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  const [allProductsLoading, setAllProductsLoading] = useState(true);
  const [featuredProductsLoading, setFeaturedProductsLoading] = useState(true);
  const [bestSellerProductsLoading, setBestSellerProductsLoading] =
    useState(true);

  useEffect(() => {
    setAllProductsLoading(true);
    fetch("https://oasisfoods.onrender.com/products/all/")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setAllProductsLoading(false);
      });
  }, []);

  useEffect(() => {
    setFeaturedProductsLoading(true);
    fetch("https://oasisfoods.onrender.com/products/featured/")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
        setFeaturedProductsLoading(false);
      });
  }, []);

  useEffect(() => {
    setBestSellerProductsLoading(true);
    fetch("https://oasisfoods.onrender.com/products/best_seller/")
      .then((res) => res.json())
      .then((data) => {
        setBestSellerProducts(data);
        setBestSellerProductsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
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
