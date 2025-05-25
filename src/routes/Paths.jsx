import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import CreateAccountPage from "../pages/CreateAccountPage";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route to="/produtos" element={<ProductListingPage />} />
            <Route to="/cadastro" element={<CreateAccountPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
