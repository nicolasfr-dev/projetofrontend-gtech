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
      <div className="flex gap-3 flex-wrap">
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
                w-10 h-10 flex items-center justify-center
                ${shape === "circle" ? "rounded-full" : "rounded-md"}
                ${isColor ? "" : "text-sm font-medium bg-white text-black"}
                outline-2
                ${isSelected ? "outline outline-primary" : "outline-none"}
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