import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../data/context/CarrinhoContext.jsx";
import CartIcon from "../assets/mini-cart.svg";

const CarrinhoList = () => {
  const { carrinho, limparCarrinho } = useCarrinho();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const total = carrinho.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Toggle para mobile (click)
  const handleToggle = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative cursor-pointer select-none"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <div className="relative" onClick={handleToggle}>
        <img src={CartIcon} alt="Carrinho" className="w-6 h-6" />
        {carrinho.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {carrinho.length}
          </span>
        )}
      </div>

      {isOpen && (
        <div className="absolute right-0 top-10 w-72 sm:w-80 max-w-[90vw] bg-white rounded shadow-xl border border-gray-200 z-50">
          <div className="p-3 sm:p-4">
            <h4 className="font-bold text-dark-gray pt-2 pb-4 border-b border-light-gray-2">Meu Carrinho</h4>

            <div className="flex flex-col gap-3 max-h-60 mt-5 pb-5 border-b border-light-gray-2 overflow-y-auto">
              {carrinho.length === 0 ? (
                <span className="text-sm text-gray-400">Seu carrinho está vazio.</span>
              ) : (
                carrinho.map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <img
                      src={item.image || `/product-thumb-${item.id}.png`}
                      alt={item.name}
                      className="w-17 h-14 rounded bg-[#E2E3FF] object-contain"
                    />
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold leading-tight truncate max-w-[12rem]">{item.name}</span>
                      <span className="text-dark-gray font-bold">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {carrinho.length > 0 && (
              <>
                <div className="flex justify-between mt-4 text-sm font-bold">
                  <span className="text-dark-gray font-bold">Valor total:</span>
                  <span className="text-error font-bold">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>

                <div className="flex justify-between mt-3 items-center">
                  <button
                    onClick={limparCarrinho}
                    className="text-xs underline text-gray-500 hover:text-dark-gray"
                  >
                    Esvaziar
                  </button>
                  <Link
                    to="/carrinho"
                    className="bg-primary text-white text-xs px-3 sm:px-4 py-2 rounded-md font-semibold"
                  >
                    Ver Carrinho
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarrinhoList;