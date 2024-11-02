import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { Country, State, City } from 'country-state-city';
import "../.cssFiles/LocationSelector.css";


interface CountryOption {
    label: string;
    value: string;
}

interface StateOption {
    label: string;
    value: string;
}

interface CityOption {
    label: string,
    value: string;
}

const LocationSelector: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null> (null);
    const [selectedState, setSelectedState] = useState<StateOption | null>(null);
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

    const countryOptions = Country.getAllCountries().map((country) => ({ // Fetch and format country options.
        value: country.isoCode, // Use ISO Code types in country-state-city library to represent countries, states, or regions in a uniform. 
                                    //ISO Code adheres to the ISO 3166 standard managed by the International Organization for Standardization (ISO) and is 
                                    //widely used in databases, APIs, and applications to identify geographic locations.
        label: country.name
    }));

    const stateOptions = selectedCountry // Fetch and format state options based on the selected country.
        ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
            value: state.isoCode,
            label: state.name
        }))
        : [];


    const cityOptions = selectedState // Fetch and format city options baesd on the selected state.
        ? City.getCitiesOfState(selectedCountry?.value || "", selectedState.value).map((city) => ({
            value: city.name,
            label: city.name
        }))
        : [];

    const handleCountryChange = (country: SingleValue<CountryOption>) => {
        setSelectedCountry(country);
        setSelectedState(null); // Reset state and city when country changes
        setSelectedCity(null);
    };
    
    const handleStateChange = (state: SingleValue<StateOption>) => {
        setSelectedState(state);
        setSelectedCity(null); // Reset city when state changes
    };

    const handleCityChange = (city: SingleValue<CityOption>) => {
        setSelectedCity(city);
    };

    return (
        <div className = "dropdown-container">
            <h2>Select Location</h2>

            <Select
                options = {countryOptions}
                value = {selectedCountry}
                onChange = {handleCountryChange}
                placeholder = "Select Country"
                styles = {{
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
        

        {selectedCountry && (
            <Select
                options = {stateOptions}
                value={selectedState}
                onChange={handleStateChange}
                placeholder = "Select State/Province"
                styles = {{
                    container: (provided) => ({
                        ...provided,
                        width: "300px", 
                    }),
                    control: (provided) => ({
                        ...provided,
                        minWidth: "150px",
                    }),
                }}
                isDisabled = {!stateOptions.length}
            />
        )}

        {selectedState && (
            <Select
                options = {cityOptions}
                value = {selectedCity}
                onChange = {handleCityChange}
                placeholder = "Select City"
                styles = {{
                    container: (provided) => ({
                        ...provided,
                        width: "300px",
                    }),
                    control: (provided) => ({
                        ...provided,
                        minWidth: "150px",
                    }),
                }}
                isDisabled = {!cityOptions.length}
            />
        )}

        {selectedCountry && selectedState && selectedCity && (
            <p>
                Selected Location: {selectedCity.label}, {selectedState.label}, {selectedCountry.label}
            </p>
        )}
    </div>
    );

};

export default LocationSelector;