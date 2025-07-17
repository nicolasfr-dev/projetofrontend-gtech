import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-header.svg";
import Search from "../assets/search-icon.svg";
import CartIcon from "../assets/mini-cart.svg";
import { Menu, X } from "lucide-react";
import CarrinhoList from "./CarrinhoList";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsSearchOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Linha principal */}
        <div className="relative flex items-center justify-between py-4 lg:py-6 gap-4">
          <div className="flex items-center gap-4">
            {/* Menu Mobile */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6 text-dark-gray hover:text-primary" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            >
              <img src={Logo} alt="Logo" className="h-8 lg:h-12" />
            </Link>
          </div>

          {/* Busca Desktop */}
          <div className="hidden lg:block flex-1 max-w-full mx-2 relative">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full bg-light-gray-3 text-dark-gray-2 rounded-md h-15 pl-4 pr-10 placeholder:text-light-gray focus:outline-primary"
            />
            <img
              src={Search}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
              alt="Buscar"
            />
          </div>

          {/* Ações (mobile e desktop) */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Botão de busca mobile */}
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="lg:hidden"
              aria-label="Buscar"
            >
              <img
                src={Search}
                className="w-5 h-5 hover:opacity-70 transition"
                alt="Buscar"
              />
            </button>

            {/* Ações Desktop - agrupadas */}
            <div className="hidden lg:flex items-center lg:px-8 gap-4">
              <Link
                to="/user/cadastro"
                className="text-dark-gray underline text-sm hover:text-primary"
              >
                Cadastre-se
              </Link>
              <Link
                to="/user/login"
                className="bg-primary hover:bg-tertiary text-white font-semibold px-4 py-2 rounded-lg text-sm"
              >
                Entrar
              </Link>
            </div>

            <div className="ml-4">
              <CarrinhoList />
            </div>
          </div>
        </div>

        {/* Busca Mobile Expandida */}
        {isSearchOpen && (
          <div className="px-1 pb-3 lg:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                className="w-full bg-light-gray-3 text-dark-gray-2 rounded-md h-10 pl-4 pr-10 placeholder:text-light-gray focus:outline-primary"
              />
              <img
                src={Search}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                alt="Buscar"
              />
            </div>
          </div>
        )}

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex gap-6 pt-4 pb-4">
          {[
            { to: "/", label: "Home" },
            { to: "/produtos", label: "Produtos" },
            { to: "/categorias", label: "Categorias" },
            { to: "/pedidos", label: "Meus Pedidos" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-primary border-b-2 border-primary font-bold"
                    : "text-dark-gray-2 hover:text-primary"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Menu lateral (mobile) */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="fixed top-0 left-0 w-64 h-full bg-white z-50 p-6 flex flex-col animate-slide-in">
            <button
              className="self-end mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-sm font-bold mb-4">Páginas</h3>
            <nav className="flex flex-col gap-4">
              {[
                { to: "/", label: "Home" },
                { to: "/produtos", label: "Produtos" },
                { to: "/categorias", label: "Categorias" },
                { to: "/pedidos", label: "Meus Pedidos" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm ${
                      isActive
                        ? "text-primary font-bold underline"
                        : "text-dark-gray hover:text-primary"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <hr className="my-4 border-light-gray-2" />
            <div className="flex flex-col gap-2 mt-auto">
              <Link
                to="/user/login"
                className="bg-primary text-white text-center py-2 rounded font-semibold hover:bg-tertiary"
              >
                Entrar
              </Link>
              <Link
                to="/user/cadastro"
                className="text-primary text-center underline font-medium hover:text-tertiary"
              >
                Cadastre-se
              </Link>
            </div>
          </aside>
        </>
      )}
    </header>
  );
};

export default Header;
