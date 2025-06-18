import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import LoginPage from "../pages/LoginPage";
import OrderPage from "../pages/OrdersPage";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
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
    </>
  );
};

export default Paths;
