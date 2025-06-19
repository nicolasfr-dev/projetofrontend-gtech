import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import LoginPage from "../pages/LoginPage";
import OrderPage from "../pages/OrdersPage";
import ProductViewPage from "../pages/ProductViewPage";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  return null;
};

const Paths = () => {
  return (
    <BrowserRouter basename="/projetofrontend-gtech/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/cadastro" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/produto/:id/:sku" element={<ProductViewPage />} />
          <Route path="/pedidos" element={<OrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
