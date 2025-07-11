﻿import { useState, useEffect } from "react";
import ProductOptions from "./ProductOptions";
import { useCarrinho } from "../data/context/CarrinhoContext.jsx";

const BuyBox = ({ id, name, reference, price, off, tags, colors, description, onColorSelect, selectedSku }) => {
  const { adicionarAoCarrinho } = useCarrinho();
  const initialColorIndex = colors.findIndex((c) => c.sku === selectedSku);
  const [selectedColor, setSelectedColor] = useState(initialColorIndex >= 0 ? initialColorIndex : 0);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const index = colors.findIndex((c) => c.sku === selectedSku);
    if (index >= 0 && index !== selectedColor) {
      setSelectedColor(index);
      setSelectedSize(null);
    }
  }, [selectedSku]);

  const finalPrice = off ? price - (price * off) / 100 : price;
  const sizeOptions = colors[selectedColor]?.sizes || [];
  const selectedVariant = colors[selectedColor] || {};
  const selectedSizeValue = sizeOptions[selectedSize] || null;

  const handleBuy = () => {
    if (!selectedSizeValue) return;

    adicionarAoCarrinho({
      id,
      name,
      sku: selectedVariant.sku,
      color: selectedVariant.color,
      size: selectedSizeValue,
      price: finalPrice,
      image: selectedVariant.images?.[0],
    });
  };

  return (
    <section className="w-full max-w-md mx-auto flex flex-col gap-4 px-4 sm:px-6">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{name}</h2>

      <div className="text-sm text-dark-gray-3">
        <span>Ref: {reference}</span> Â· <span>Avaliação: {selectedVariant.rating || "N/A"}â­�</span>
      </div>

      {off ? (
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-dark-gray">R$ {finalPrice.toFixed(2)}</span>
          <span className="text-sm line-through text-gray-400">R$ {price.toFixed(2)}</span>
        </div>
      ) : (
        <span className="text-4xl font-bold text-dark-gray">R$ {price.toFixed(2)}</span>
      )}

      <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
        {tags.map((tag, i) => (
          <span key={i} className="bg-white text-xs rounded-full px-3 py-1 font-medium text-gray-700">{tag}</span>
        ))}
      </div>

      <h6 className="text-light-gray">Descrição do produto</h6>
      <p className="text-sm text-dark-gray">{description}</p>

      <ProductOptions
        title="Cores"
        shape="circle"
        type="color"
        options={colors}
        selectedIndex={selectedColor}
        onSelect={(index) => {
          setSelectedColor(index);
          setSelectedSize(null);
          if (typeof onColorSelect === "function") onColorSelect(index);
        }}
      />

      <ProductOptions
        title="Tamanhos"
        shape="square"
        type="text"
        options={sizeOptions}
        selectedIndex={selectedSize === null ? -1 : selectedSize}
        onSelect={setSelectedSize}
      />

      <button
        onClick={handleBuy}
        disabled={!selectedSizeValue}
        className={`mt-4 w-full sm:w-60 py-3 rounded-lg text-white font-bold ${
          selectedSizeValue ? "bg-buy-button hover:bg-buy-button-hover cursor-pointer" : "bg-light-gray-2 cursor-not-allowed"
        }`}
      >
        COMPRAR
      </button>
    </section>
  );
};

export default BuyBox;