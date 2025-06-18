import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import ProductCard from "../components/ProductCard";
import ArrowRight2 from "../assets/arrow-right-2.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import FilterGroup from "../components/FilterGroup";
import products from "../data/Products";

const ProductListingPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (updatedFilters) => {
    setSelectedFilters(updatedFilters);
    console.log("Filtros selecionados:", updatedFilters);
  };

  return (
    <>
      <main className="px-75 w-full pt-7 pb-5 bg-light-gray-3">
        <div className="flex items-center my-5 justify-between w-full">
          <span>Resultados para "busca"</span>
          <label
            className="flex border-1 border-dark-gray-2 rounded-sm w-75 p-4 pr-0"
            htmlFor="ordenar"
          >
            <h3 className="font-bold">Ordenar por:</h3>
            <select
              className="focus:outline-0 px-2"
              name="ordenar"
              id="ordenar"
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
              <h3 className="text-lg font-bold border-b-1 border-light-gray-2 pb-3 pt-3 rounded-sm text-dark-gray-2">
                Filtrar por:
              </h3>
              <div className="space-y-1">
                <FilterGroup
                  title="Marca"
                  type="checkbox"
                  option={["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"]}
                  onChange={handleFilterChange}
                />
                <FilterGroup
                  title="Categoria"
                  type="checkbox"
                  option={[
                    "Esporte e lazer",
                    "Casual",
                    "Utilitário",
                    "Corrida",
                  ]}
                  onChange={handleFilterChange}
                />
                <FilterGroup
                  title="Gênero"
                  type="checkbox"
                  option={["Masculino", "Feminino", "Unissex"]}
                  onChange={handleFilterChange}
                />

                <FilterGroup
                  title="Estado"
                  type="radio"
                  option={["Novo", "Usado"]}
                  onChange={handleFilterChange}
                />
              </div>
            </aside>
          </section>

          <Section
            content={
              <ProductListing preset="3xAll" products={products} />
            }
          />
        </div>
      </main>
    </>
  );
};

export default ProductListingPage;
