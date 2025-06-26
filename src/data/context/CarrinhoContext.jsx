import { createContext, useContext, useState } from "react";
import products from "../Products";

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const existente = prev.find(
        (p) => p.sku === produto.sku && p.size === produto.size
      );

      if (existente) {
        return prev.map((p) =>
          p.sku === produto.sku && p.size === produto.size
            ? { ...p, qty: (p.qty || 1) + 1 }
            : p
        );
      } else {
        let preco = 0;
        let nome = "Produto";
        let imagem = "";
        let id = null;

        for (const prod of products) {
          const cor = prod.colors.find((c) => c.sku === produto.sku);
          if (cor) {
            preco = prod.price;
            nome = prod.name;
            imagem = cor.images?.[0] || "";
            id = prod.id;
            break;
          }
        }

        return [
          ...prev,
          {
            ...produto,
            qty: 1,
            price: preco,
            name: nome,
            image: imagem,
            id: id,
          },
        ];
      }
    });
  };

  const removerDoCarrinho = (sku) => {
    setCarrinho((prev) => prev.filter((item) => item.sku !== sku));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);