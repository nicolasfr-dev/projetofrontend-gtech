import { useState } from 'react';

const FilterGroup = ({ title, type = 'checkbox', option = [], onChange }) => {
  const [selectedItems, setSelectedItems] = useState(
    type === 'checkbox' ? {} : ''
  );

  const handleChange = (item) => {
    if (type === 'checkbox') {
      const updated = {
        ...selectedItems,
        [item]: !selectedItems[item],
      };
      setSelectedItems(updated);
      if (onChange) {
        onChange(updated);
      }
    } else {
      setSelectedItems(item);
      if (onChange) {
        onChange(item);
      }
    }
  };

  return (
    <div className=''>
      <h4 className="text-sm font-bold text-dark-gray-2 pb-0 py-2 my-1">{title}</h4>
      <fieldset className="space-y-2">
        {option.map((item, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 text-sm text-dark-gray-2"
          >
            <input
              type={type}
              name={title}
              className={`h-5 w-5 ${type === 'checkbox' ? 'form-checkbox' : 'form-radio'} text-primary`}
              checked={
                type === 'checkbox'
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