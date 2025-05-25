import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo-header.svg";
import Cart from "../assets/mini-cart.svg";
import Search from "../assets/search-icon.svg";

const Header = () => {
  return (
    <>
      <header className="bg-white w-full px-22 pt-10 pb-5">
        <div className="inline-flex gap-5 w-full items-center">
          <Link to={"/"}>
            <img src={Logo} alt="Logo loja" />
          </Link>

          <div className="relative flex items-center focus-within:text-primary ">
            <img
              src={Search}
              className="absolute items-end right-5 text-light-gray-2 pointer-events-none fill-primary"
            />
            <input
              className="bg-light-gray-3 text-dark-gray-2 rounded-md w-4xl h-15 p-5 placeholder:text-light-gray focus:outline-1 focus:outline-primary"
              type="text"
              placeholder="Pesquisar produto..."
            />
          </div>

          <div className="flex gap-6 mx-10 items-center">
            <span className=" text-dark-gray underline">
              <Link to="/cadastro">Cadastre-se</Link>
            </span>
            <Link to="login">
              <button className="bg-primary hover:bg-tertiary inline font-semibold w-25 h-10 rounded-lg text-white cursor-pointer">
                Entrar
              </button>
            </Link>
          </div>

          <Link to="/carrinho">
            <button className="ml-20 cursor-pointer">
              <img src={Cart} alt="" />
            </button>
          </Link>
        </div>
        <nav className="mt-5">
          <ul className="flex gap-4 ">
            <li className="active:text-primary hover:text-primary">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink to={"/produtos"}>Produtos</NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink to={"/categorias"}>Categorias</NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink to={"/pedidos"}>Meus Pedidos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
