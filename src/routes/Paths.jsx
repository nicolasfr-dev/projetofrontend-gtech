import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import LoginPage from "../pages/LoginPage";
import OrderPage from "../pages/OrdersPage";
import ProductViewPage from "../pages/ProductViewPage";
import PageLayoutLogin from "../layouts/PageLayoutLogin";
import ForgotPassword from "../pages/ForgotPassword";
import CarrinhoPage from "../pages/CarrinhoPage";
import CarrinhoConfirm from "../components/CarrinhoConfirm";
import { CarrinhoProvider } from "../data/context/CarrinhoContext.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import CarrinhoSucess from "../pages/CarrinhoSucess.jsx";
import RegisterFormPage from "../pages/RegisterFormPage.jsx";
import InfoPage from "../pages/InfoPage.jsx";


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  return null;
};

const Paths = () => {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/produtos" element={<ProductListingPage />} />
            <Route path="/produto/:id/:sku" element={<ProductViewPage />} />
            <Route path="/pedidos" element={<OrderPage />} />
            <Route path="/informacoes" element={<InfoPage />} />
            <Route path="/carrinho" element={<CarrinhoPage />} />
            <Route path="/carrinho/confirm" element={<CarrinhoConfirm />} />
            <Route path="/carrinho/sucess" element={<CarrinhoSucess />} />
            <Route path="*" element={<NotFoundPage />}/>
          </Route>
          <Route path="/user" element={<PageLayoutLogin />}>
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/cadastro" element={<CreateAccountPage />} />
            <Route path="/user/cadastro/form" element={<RegisterFormPage />} />
            <Route path="/user/resgatarsenha" element={<ForgotPassword />} />
            <Route path="*" element={<NotFoundPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  );
};

export default Paths;
