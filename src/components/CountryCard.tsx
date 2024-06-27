import React from "react";
import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <>
      <div
        onClick={() => handleSelectCountry(country)}
        className="border-solid border-4 border-sky-200 rounded-3xl text-center flex p-2 gap-9 hover:border-sky-400 focus:border-sky-600 "
      >
        <img
          src={country.flags.svg}
          style={{ width: "40px", height: "40px" }}
        />
        <div>
          <p>{country.name.common}</p>
          <p className="text-slate-400">{country.capital}</p>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
