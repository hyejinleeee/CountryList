import React, { useEffect, useState } from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((selectedCountry: Country) => {
          return selectedCountry.name.common !== country.name.common;
        })
      );
    }
  };

  return (
    <>
      <h1>Favorite Countries</h1>
      <div>
        {selectedCountries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
      <h1>Countries</h1>
      <div>
        {countries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountryList;
