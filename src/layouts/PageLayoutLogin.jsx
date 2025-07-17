import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../assets/logo-header.svg";

const PageLayoutLogin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white flex items-center px-4 sm:px-8 md:px-12 lg:px-75 py-6">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PageLayoutLogin;
