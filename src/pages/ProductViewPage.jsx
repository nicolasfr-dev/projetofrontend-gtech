import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import products from "../data/Products"; 
import BuyBox from "../components/BuyBox";
import ProductGallery from "../components/ProductGallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import ArrowRight2 from "../assets/arrow-right-2.svg";

const ProductViewPage = () => {
  const { id, sku } = useParams();
  const navigate = useNavigate();

  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  const [selectedSku, setSelectedSku] = useState(sku);

  useEffect(() => {
    setSelectedSku(sku);
  }, [sku]);

  if (!product) {
    return (
      <div className="p-8 text-center text-red-500 font-bold">
        Produto não encontrado
      </div>
    );
  }

  const variant = product.colors.find((c) => c.sku === selectedSku) || product.colors[0];

  const handleColorSelect = (index) => {
    const newVariant = product.colors[index];
    if (!newVariant) return;

    setSelectedSku(newVariant.sku);

    navigate(`/produto/${product.id}/${newVariant.sku}`);
  };

  return (
    <>
      <main className="px-75 bg-light-gray-3 py-10 gap-10">
        <section className="flex pb-5">
          <section className="w-1/2 h-full">
            <ProductGallery image={variant.image} alt={`${product.name} - ${variant.color}`} />
          </section>

          <BuyBox
            id={product.id}
            name={product.name}
            reference={variant.reference}
            price={product.price}
            off={variant.off}
            tags={product.tags}
            colors={product.colors}
            description={product.description}
            onColorSelect={handleColorSelect}
            selectedSku={selectedSku} 
          />
        </section>

        <section>
          <Section
            title="Produtos em alta"
            link={
              <Link className="flex gap-2" to="/produtos">
                Ver tudo <img className="w-5" src={ArrowRight2} alt="" />
              </Link>
            }
            content={<ProductListing preset="4x1" products={products} />}
          />
        </section>
      </main>
    </>
  );
};

export default ProductViewPage;