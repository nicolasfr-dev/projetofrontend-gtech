import ProductCard from "../components/ProductCard";

const ProductListing = ({ products, grid }) => {
  return (
    <section className="grid grid-cols-3 gap-6">
      {products.map((product) =>
        product.colors.map((variant) => (
          <ProductCard
            key={`${product.id}-${variant.sku}`}
            id={product.id}
            sku={variant.sku}
            image={variant.image}
            category={product.category}
            title={`${product.name} - ${variant.color}`}
            price={product.price}
            off={product.off}
          />
        ))
      )}
    </section>
  );
};

export default ProductListing;
