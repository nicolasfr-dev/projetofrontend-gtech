import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import ArrowRight2 from "../assets/arrow-right-2.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FilterGroup from "../components/FilterGroup";
import products from "../data/Products";

const ProductListingPage = () => {
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [resetSignal, setResetSignal] = useState(0);
  const [sortOrder, setSortOrder] = useState("mais-relevantes");

  const handleFilterChange = (updated) => {
    setSelectedFilters((prev) => ({
      ...prev,
      ...updated,
    }));
  };

  const resetFilters = () => {
    setSelectedFilters({});
    setResetSignal((prev) => prev + 1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search")?.toLowerCase() || "";

    let filtered = products.filter((product) => {
      const searchMatch =
        product.name.toLowerCase().includes(search) ||
        product.tags.some((tag) => tag.toLowerCase().includes(search));

      const marcaFiltro = selectedFilters["Marca"];
      const marcaMatch =
        !marcaFiltro || Object.values(marcaFiltro).every((v) => !v)
          ? true
          : product.tags.some((tag) => marcaFiltro[tag]);

      const generoFiltro = selectedFilters["Gênero"];
      const generoMatch =
        !generoFiltro || Object.values(generoFiltro).every((v) => !v)
          ? true
          : product.tags.some((tag) => generoFiltro[tag]);

      const categoriaFiltro = selectedFilters["Categoria"];
      const categoriaMatch =
        !categoriaFiltro || Object.values(categoriaFiltro).every((v) => !v)
          ? true
          : product.tags.some((tag) => categoriaFiltro[tag]);

      const estadoFiltro = selectedFilters["Estado"];
      const estadoMatch = !estadoFiltro || product.tags.includes(estadoFiltro);

      return (
        searchMatch &&
        marcaMatch &&
        generoMatch &&
        categoriaMatch &&
        estadoMatch
      );
    });

    filtered = filtered.sort((a, b) => {
      const getMinDiscountedPrice = (product) => {
        return Math.min(
          ...product.colors.map((variant) => {
            const discount = variant.off ? (product.price * variant.off) / 100 : 0;
            return product.price - discount;
          })
        );
      };

      const priceA = getMinDiscountedPrice(a);
      const priceB = getMinDiscountedPrice(b);

      if (sortOrder === "crescente-preco") return priceA - priceB;
      if (sortOrder === "decrescente-preco") return priceB - priceA;
      return 0; 
    });

    setFilteredProducts(filtered);
  }, [location.search, selectedFilters, sortOrder]);

  return (
    <main className="px-75 w-full pt-7 pb-5 bg-light-gray-3">
      <div className="flex items-center my-5 justify-between w-full">
        <span>
          Resultados para "
          {new URLSearchParams(location.search).get("search") || "todos"}"
        </span>
        <label className="flex border-1 border-dark-gray-2 rounded-sm w-75 p-4 pr-0" htmlFor="ordenar">
          <h3 className="font-bold">Ordenar por:</h3>
          <select
            className="focus:outline-0 px-2"
            name="ordenar"
            id="ordenar"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="crescente-preco">Preço mais barato</option>
            <option value="decrescente-preco">Preço mais caro</option>
            <option value="mais-relevantes">Mais relevantes</option>
          </select>
        </label>
      </div>

      <div className="flex space-x-5 justify-between">
        <section>
          <aside className="w-65 p-3 px-5 bg-white">
            <div className="border-b-1 border-light-gray-2 pb-3 pt-3 mb-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-dark-gray-2">Filtrar por:</h3>
                <button className="text-sm text-primary underline hover:opacity-70" onClick={resetFilters}>
                  Limpar filtros
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <FilterGroup
                title="Marca"
                type="checkbox"
                option={["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"]}
                onChange={(f) => handleFilterChange({ Marca: f })}
                resetSignal={resetSignal}
              />
              <FilterGroup
                title="Categoria"
                type="checkbox"
                option={["Esporte e lazer", "Casual", "Utilitário", "Corrida"]}
                onChange={(f) => handleFilterChange({ Categoria: f })}
                resetSignal={resetSignal}
              />
              <FilterGroup
                title="Gênero"
                type="checkbox"
                option={["Masculino", "Feminino", "Unissex"]}
                onChange={(f) => handleFilterChange({ Gênero: f })}
                resetSignal={resetSignal}
              />
              <FilterGroup
                title="Estado"
                type="radio"
                option={["Novo", "Usado"]}
                onChange={(f) => handleFilterChange({ Estado: f })}
                resetSignal={resetSignal}
              />
            </div>
          </aside>
        </section>

        <Section content={<ProductListing preset="3xAll" products={filteredProducts} />} />
      </div>
    </main>
  );
};

export default ProductListingPage;