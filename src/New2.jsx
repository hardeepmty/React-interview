import React, { useState } from 'react';

const New2 = () => {
  const countries = [
    {
      countryName: "USA",
      cities: ["New York", "Los Angeles"]
    },
    {
      countryName: "UK",
      cities: ["London", "Manchester"]
    },
    {
      countryName: "France",
      cities: ["Paris", "Marseille"]
    },
    {
      countryName: "Germany",
      cities: ["Berlin", "Munich"]
    }
  ];

  const [selectedCountry, setSelectedCountry] = useState(""); // State to store selected country

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value); // Update selected country
  };

  return (
    <div>
      <div>
        <select onChange={handleCountryChange}>
          {countries.map((country, index) => (
            <option key={index} value={country.countryName}>
              {country.countryName}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div>
          <select>
            {countries
              .find((country) => country.countryName === selectedCountry)
              .cities.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default New2;
