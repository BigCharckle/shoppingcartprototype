import React from "react";
const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        <h3>{label}:    
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select> 
        </h3>
      </label>
    );
  };
  export default Dropdown;