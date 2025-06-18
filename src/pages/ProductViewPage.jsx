import { useParams, Link } from "react-router-dom";
import products from "../data/Products"; // caminho correto para seu array
import BuyBox from "../components/BuyBox";
import ProductGallery from "../components/ProductGallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import ArrowRight2 from "../assets/arrow-right-2.svg";

const ProductViewPage = () => {
  const { id, sku } = useParams();

  const productId = parseInt(id);

  const product = products.find((p) => p.id === productId);
  const variant = product?.colors.find((c) => c.sku === sku);

  if (!product || !variant) {
    return (
      <div className="p-8 text-center text-red-500 font-bold">
        Produto não encontrado
      </div>
    );
  }

  return (
    <>
      <main className="px-75 bg-light-gray-3 py-10 gap-10">
        <section className="flex pb-5">

          <section className="w-full lg:w-1/2">
            <ProductGallery image={variant.image} alt={product.name} />
          </section>

          <BuyBox
            productId={product.id}
            name={`${product.name} - ${variant.color}`}
            rating={variant.rating}
            reference={variant.reference}
            price={product.price}
            off={variant.off}
            tags={product.tags}
            image={variant.image}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            colors={product.colors}
            onColorSelect={(index) => {
            }}
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
