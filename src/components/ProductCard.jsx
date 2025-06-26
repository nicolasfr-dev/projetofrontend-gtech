import { Link } from "react-router-dom";

const ProductCard = ({ id, sku, images = [], category, title, price, off }) => {
  const ogPrice = parseFloat(price);
  const hasDiscount = !!off;
  const discount = hasDiscount ? (ogPrice * off) / 100 : 0;
  const priceOff = ogPrice - discount;

  const image = images?.[0];

  return (
    <Link to={`/produto/${id}/${sku}`}>
      <div className="w-70 h-90 flex flex-col justify-between select-none">
        <div className="relative bg-white rounded-sm h-full flex justify-center items-center overflow-hidden group">
          {hasDiscount && (
            <span className="absolute text-sm top-5 left-5 font-bold py-1 px-3 rounded-2xl bg-off text-dark-gray-2">
              {off}% OFF
            </span>
          )}
          {image && (
            <img
              loading="lazy"
              className="object-fit overflow-hidden rounded-sm transition-transform duration-300 group-hover:scale-110"
              src={image}
              alt={title}
            />
          )}
        </div>

        <div className="mt-2 select-text">
          <h6 className="text-light-gray font-bold text-xs mb-3">{category}</h6>
          <h4 className="text-dark-gray-2 text-xl leading-tight font-normal truncate">
            {title}
          </h4>
        </div>

        <div className="flex space-x-3 text-xl mt-1">
          {hasDiscount && (
            <h4 className="line-through text-light-gray">R${price}</h4>
          )}
          <h4 className="font-bold">
            R${hasDiscount ? priceOff.toFixed(2) : ogPrice.toFixed(2)}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
