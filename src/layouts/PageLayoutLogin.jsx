import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../assets/logo-header.svg";

const PageLayoutLogin = () => {
    return ( 
        <>
        <header className="bg-white flex px-75 py-6">
                 <a href="/"><img src={Logo} className="flex "/></a>
        </header>
        <Outlet />
        <Footer />
        </>
     );
}
 
export default PageLayoutLogin;