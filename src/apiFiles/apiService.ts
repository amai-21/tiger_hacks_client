import axios from 'axios';

interface ServerData { // Define the type of data expected from the server.
    message: string;
}

const BASE_URL = 'http://localhost:5000'; // Base URL of the server

export const fetchData = async (): Promise<ServerData> => { // Function to fetch data from the server with type annotations.
    try {
        const response = await axios.get<ServerData>('${BASE_URL}/api/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};



