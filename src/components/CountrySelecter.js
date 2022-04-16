import * as React from 'react';
import Dropdown from './Dropdown';

const CountrySelecter = (props) => {

  const {countries, currentCountry, onChangeCountry} = props;
  const handleChange = (event) => {
    onChangeCountry(event);
  };
  const options = countries.map((country) => {
      return {option: country.currency, label: country.name}
  });
  return (
    <div>
      <Dropdown className=""
        label="Select your country"
        options={options}
        value={currentCountry.country}
        onChange={handleChange}
      />
      <p><h3>You are using currency: {currentCountry.currency}</h3></p>
    </div>
  );
};
export default CountrySelecter;