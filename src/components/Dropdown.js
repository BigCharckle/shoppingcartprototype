import React from "react";
const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <div>
      <label>
        <h3>{label}:    
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select> 
        </h3>
      </label>
      </div>
    );
  };
  export default Dropdown;