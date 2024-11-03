import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { Country, State, City } from "country-state-city";
import "../.cssFiles/LocationSelector.css";
import { Region } from "../Interfaces/Region";

interface CountryOption {
  label: string;
  value: string;
}

interface StateOption {
  label: string;
  value: string;
}

interface CityOption {
  label: string;
  value: string;
}
interface RecProps {
  toRec: (region: Region) => void;
}
const LocationSelector: React.FC<RecProps> = (props: RecProps) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );
  const [selectedState, setSelectedState] = useState<StateOption | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const stateOptions = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    : [];

  const cityOptions = selectedState
    ? City.getCitiesOfState(
        selectedCountry?.value || "",
        selectedState.value
      ).map((city) => ({
        value: city.name,
        label: city.name,
      }))
    : [];

  const handleCountryChange = (country: SingleValue<CountryOption>) => {
    console.log("country");
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (state: SingleValue<StateOption>) => {
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleCityChange = (city: SingleValue<CityOption>) => {
    setSelectedCity(city);
  };

  function CreateRegion(): Region {
    if (selectedCountry?.label === undefined) {
      setSelectedCountry(null);
    }
    if (selectedState?.label === undefined) {
      setSelectedState(null);
    }
    if (selectedCity?.label === undefined) {
      setSelectedCity(null);
    }
    console.log(selectedCity?.label);
    return {
      country: selectedCountry?.label,
      state: selectedState?.label,
      city: selectedCity?.label,
    };
  }
  return (
    <div className="dropdown-container">
      <h2>Select Location</h2>
      <Select
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        placeholder="Select Country"
        styles={{
          container: (provided) => ({
            ...provided,
            width: "300px",
          }),
          control: (provided) => ({
            ...provided,
            minWidth: "150px",
          }),
        }}
      />
      <Select
        options={stateOptions}
        value={selectedState}
        onChange={handleStateChange}
        placeholder="Select State/Province"
        styles={{
          container: (provided) => ({
            ...provided,
            width: "300px",
          }),
          control: (provided) => ({
            ...provided,
            minWidth: "150px",
          }),
        }}
        isDisabled={!stateOptions.length}
      />
      return (
      <div className="locationBody">
        <div className="dropdown-container">
          <h2>Select Location</h2>

          <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select Country"
            styles={{
              container: (provided) => ({
                ...provided,
                width: "300px",
              }),
              control: (provided) => ({
                ...provided,
                minWidth: "150px",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "black",
              }),
              input: (provided) => ({
                ...provided,
                color: "black",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "gray",
              }),
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? "white" : "black",
                backgroundColor: state.isSelected ? "blue" : "white",
              }),
            }}
          />

          {selectedCountry && (
            <Select
              options={stateOptions}
              value={selectedState}
              onChange={handleStateChange}
              placeholder="Select State/Province"
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: "300px",
                }),
                control: (provided) => ({
                  ...provided,
                  minWidth: "150px",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                input: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "gray",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "white" : "black",
                  backgroundColor: state.isSelected ? "blue" : "white",
                }),
              }}
              isDisabled={!stateOptions.length}
            />
          )}

          {selectedState && (
            <Select
              options={cityOptions}
              value={selectedCity}
              onChange={handleCityChange}
              placeholder="Select City"
              styles={{
                container: (provided) => ({
                  ...provided,
                  width: "300px",
                }),
                control: (provided) => ({
                  ...provided,
                  minWidth: "150px",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                input: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "gray",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "white" : "black",
                  backgroundColor: state.isSelected ? "blue" : "white",
                }),
              }}
              isDisabled={!cityOptions.length}
            />
          )}

          {selectedCountry && selectedState && selectedCity && (
            <p>
              Selected Location: {selectedCity.label}, {selectedState.label},{" "}
              {selectedCountry.label}
            </p>
          )}
        </div>
      </div>
      );
      <Select
        options={cityOptions}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder="Select City"
        styles={{
          container: (provided) => ({
            ...provided,
            width: "300px",
          }),
          control: (provided) => ({
            ...provided,
            minWidth: "150px",
          }),
        }}
        isDisabled={!cityOptions.length}
      />
      {selectedCountry &&
        (!stateOptions.length || selectedState) &&
        (!cityOptions.length || selectedCity) && (
          <button
            style={{
              marginTop: 30,
              color: "white",
              backgroundColor: "green",
              fontSize: 20,
              padding: 10,
              borderRadius: 10,
              borderColor: "transparent",
              fontWeight: "bold",
            }}
            onClick={() => props.toRec(CreateRegion())}
          >
            Go!
          </button>
        )}
    </div>
  );
};

export default LocationSelector;
