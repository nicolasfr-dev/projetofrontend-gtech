const ProductCard = ({ image, category, title, price, off }) => {
  const ogPrice = parseFloat(price);
  const hasDiscount = !!off;
  const discount = hasDiscount ? (ogPrice * off) / 100 : 0;
  const priceOff = ogPrice - discount;

  return (
    <div className="w-75 h-100 flex flex-col justify-between select-none pointer-events-none">
      <div className="relative bg-white rounded-sm p-5 h-full flex justify-center items-center">
        {hasDiscount && (
          <span className="absolute text-sm top-5 left-5 font-bold py-1 px-3 rounded-2xl bg-off text-dark-gray-2">
            {off}% OFF
          </span>
        )}
        <img className="-rotate-30 max-h-90 object-contain" src={image} alt={title} />
      </div>

      <div className="mt-2 select-text">
        <h6 className="text-light-gray font-bold text-xs mb-3">{category}</h6>
        <h4 className="text-dark-gray-2 text-xl leading-tight font-normal truncate">{title}</h4>
      </div>

      <div className="flex space-x-3 text-xl mt-1">
        {hasDiscount && <h4 className="line-through text-light-gray">R${price}</h4>}
        <h4 className="font-bold">R${hasDiscount ? priceOff : ogPrice}</h4>
      </div>
    </div>
  );
};

export default ProductCard;