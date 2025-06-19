import { useEffect, useState } from "react";

const FilterGroup = ({
  title,
  type = "checkbox",
  option = [],
  onChange,
  resetSignal,
}) => {
  const [selectedItems, setSelectedItems] = useState(
    type === "checkbox" ? {} : ""
  );

  useEffect(() => {
    if (type === "checkbox") {
      setSelectedItems({});
      onChange?.({});
    } else {
      setSelectedItems("");
      onChange?.("");
    }
  }, [resetSignal]);

  const handleChange = (item) => {
    if (type === "checkbox") {
      const updated = {
        ...selectedItems,
        [item]: !selectedItems[item],
      };
      if (!updated[item]) delete updated[item];
      setSelectedItems(updated);
      onChange?.(updated);
    } else {
      const newValue = selectedItems === item ? "" : item;
      setSelectedItems(newValue);
      onChange?.(newValue);
    }
  };

  if (!Array.isArray(option) || option.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-bold text-dark-gray-2 py-2 my-1">{title}</h4>
      <fieldset className="space-y-2">
        {option.map((item, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 text-sm text-dark-gray-2 cursor-pointer"
          >
            <input
              type={type}
              name={title}
              className={`h-5 w-5 ${
                type === "checkbox" ? "form-checkbox" : "form-radio"
              } text-primary`}
              checked={
                type === "checkbox"
                  ? !!selectedItems[item]
                  : selectedItems === item
              }
              onChange={() => handleChange(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </fieldset>
    </div>
  );
};

export default FilterGroup;
