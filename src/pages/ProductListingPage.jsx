import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import ArrowRight2 from "../assets/arrow-right-2.svg";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FilterGroup from "../components/FilterGroup";
import products from "../data/Products";
import { Filter, X } from "lucide-react";

const ProductListingPage = () => {
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [resetSignal, setResetSignal] = useState(0);
  const [sortOrder, setSortOrder] = useState("mais-relevantes");
  const [isFilterOpen, setIsFilterOpen] = useState(false); // NOVO

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
            const discount = variant.off
              ? (product.price * variant.off) / 100
              : 0;
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
    <main className="px-4 sm:px-8 md:px-12 lg:px-75 w-full pt-7 pb-5 bg-light-gray-3">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 mb-5">
        <span>
          Resultados para "
          {new URLSearchParams(location.search).get("search") || "todos"}"
        </span>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-dark-gray-2 rounded w-full sm:w-72 p-2">
            <label htmlFor="ordenar" className="font-bold mr-2">
              Ordenar por:
            </label>
            <select
              className="focus:outline-0 px-2 w-full"
              name="ordenar"
              id="ordenar"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="crescente-preco">Preço mais barato</option>
              <option value="decrescente-preco">Preço mais caro</option>
              <option value="mais-relevantes">Mais relevantes</option>
            </select>
          </div>

          {/* Botão de filtro para mobile */}
          <div className="flex justify-end lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-white bg-primary p-4 rounded"
            >
              <Filter className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Filtro Desktop */}
        <aside className="hidden lg:block lg:w-64 p-3 bg-white">
          <div className="border-b border-light-gray-2 pb-3 mb-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-dark-gray-2">
                Filtrar por:
              </h3>
              <button
                className="text-sm text-primary underline hover:opacity-70"
                onClick={resetFilters}
              >
                Limpar filtros
              </button>
            </div>
          </div>
          <div className="space-y-2">
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

        <section className="flex-1">
          {filteredProducts.length === 0 ? (
            <p className="text-dark-gray p-4 bg-white rounded">
              Nenhum produto encontrado.
            </p>
          ) : (
            <Section
              content={
                <ProductListing preset="3xAll" products={filteredProducts} />
              }
            />
          )}
        </section>
      </div>

      {/* Sidebar Filtro Mobile */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsFilterOpen(false)}
          />
          <aside className="fixed top-0 left-0 w-72 h-full bg-white z-50 p-4 overflow-y-auto animate-slide-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-dark-gray-2 border-b-1 border-light-gray-2 pb-2">
                Filtrar por
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-dark-gray hover:opacity-70"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-2">
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

              <button
                onClick={() => {
                  resetFilters();
                  setIsFilterOpen(false);
                }}
                className="w-full mt-4 bg-primary text-white py-2 rounded font-semibold"
              >
                Limpar Filtros
              </button>
            </div>
          </aside>
        </>
      )}
    </main>
  );
};

export default ProductListingPage;
