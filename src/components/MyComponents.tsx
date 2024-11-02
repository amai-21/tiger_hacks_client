import React, { useEffect, useState } from 'react';
import { fetchData } from '../apiFiles/apiService';

interface ServerData {
    message: string,
}

function MyComponent() {

    const [data, setData] = useState<ServerData | null> (null); /*The piece of state can 
    either hold null or an object that matches the ServerData structure.
    Start with initial value of null (no data has been loaded yet).
    Once data is retrieved, replace the null with the actual data by calling setData with the data object of type ServerData.*/ 

    useEffect(() => {
        const getData = async() => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        getData();
    }, []);
}

