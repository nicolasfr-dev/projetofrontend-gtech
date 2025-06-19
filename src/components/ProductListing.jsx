import ProductCard from "../components/ProductCard";

const presets = {
  "3xAll": { class: "grid-cols-3", limit: null },
  "4x2": { class: "grid-cols-4", limit: 8 },
  "4x1": { class: "grid-cols-4", limit: 4 },
};

const ProductListing = ({ products, preset = "3xAll" }) => {
  const { class: gridClass, limit } = presets[preset] || presets["3xAll"];

  // Gera uma lista de variantes individuais, combinando dados do produto e da variante
  const allVariants = products.flatMap((product) =>
    product.colors.map((variant) => ({
      ...product,
      ...variant,
    }))
  );

  const visibleVariants = limit ? allVariants.slice(0, limit) : allVariants;

  return (
    <section className={`grid ${gridClass} gap-6`}>
      {visibleVariants.map((variant) => (
        <ProductCard
          key={variant.sku}              // <-- ADICIONA AQUI PARA REMOVER O ERRO
          id={variant.id}
          sku={variant.sku}
          images={variant.images || [variant.image]} // fallback se não houver imagens
          category={variant.category}
          title={variant.name}
          price={variant.price}
          off={variant.off}
        />
      ))}
    </section>
  );
};

export default ProductListing;