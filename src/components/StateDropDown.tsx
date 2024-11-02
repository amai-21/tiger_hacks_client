import React, { useState } from 'react';

const states: string[] = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", 
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", 
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
];


const StateDropDown: React.FC = () => {
    const [selectedState, setSelectedState] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(event.target.value);
    };

    return (
        <div>
            <label htmlFor= "state">Select a State</label>
            <select id="state" value={selectedState} onChange={handleChange}>
                <option value="">--Choose a State--</option>
                {states.map((state) => (
                    <option key = {state} value= {state}>
                        {state}
                    </option>
                ))}
            </select>
            {selectedState && <p>You selected: {selectedState}</p>}
        </div>
    );
};

export default StateDropDown;