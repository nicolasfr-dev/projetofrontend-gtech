const ProductOptions = ({
  title,
  shape = "circle",
  type = "color",
  options = [],
  selectedIndex = -1,
  onSelect,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <div className="flex gap-2 sm:gap-3 flex-wrap">
        {options.length === 0 && (
          <span className="text-gray-400 text-xs italic">Sem opções disponíveis</span>
        )}
        {options.map((option, index) => {
          const isColor = type === "color";
          const displayValue = isColor ? option.icon : option;
          const isSelected = index === selectedIndex;

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`
                w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
                ${shape === "circle" ? "rounded-full" : "rounded-md"}
                ${isColor ? "" : "text-sm sm:text-base font-medium bg-white text-black"}
                ${isSelected ? "outline outline-primary" : "outline-none"}
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
              `}
              style={isColor ? { backgroundColor: displayValue } : {}}
              title={isColor ? option.color : option}
              type="button"
            >
              {!isColor && displayValue}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductOptions;
