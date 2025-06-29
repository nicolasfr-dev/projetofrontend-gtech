import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo-header.svg";
import Search from "../assets/search-icon.svg";
import CarrinhoList from "./CarrinhoList";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="bg-white w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-7 pb-5">
      <div className="flex flex-col md:flex-row md:justify-between w-full items-center gap-4">
        <Link to={"/"}>
          <img src={Logo} alt="Logo loja" />
        </Link>

        <div className="relative flex items-center focus-within:text-primary">
          <img
            src={Search}
            className="absolute right-5 pointer-events-none"
            alt="Ýcone de busca"
          />
          <input
            className="bg-light-gray-3 text-dark-gray-2 ml-2 rounded-md w-full sm:w-72 md:w-96 h-10 sm:h-12 px-4 placeholder:text-light-gray focus:outline-1 focus:outline-primary"
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="flex gap-8 items-center">
          <span className="text-dark-gray underline">
            <Link to="/user/cadastro">Cadastre-se</Link>
          </span>
          <Link to="/user/login">
            <button className="bg-primary hover:bg-tertiary font-semibold w-28 h-10 text-sm rounded-lg text-white cursor-pointer">
              Entrar
            </button>
          </Link>
        </div>

        <div className="mt-4 md:mt-0">
          <CarrinhoList />
        </div>
      </div>

      <nav className="mt-5">
        <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start">
          {[
            { to: "/", label: "Home" },
            { to: "/produtos", label: "Produtos" },
            { to: "/categorias", label: "Categorias" },
            { to: "/pedidos", label: "Meus Pedidos" },
          ].map(({ to, label }) => (
            <li key={to} className="hover:text-primary">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold border-b-2"
                    : "text-dark-gray"
                }
              >
                {label}
              </NavLink>
              
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;