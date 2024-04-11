import { useEffect, useState } from "react";

let API_URL = import.meta.env.VITE_REACT_APP_API_URL;
let API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
let ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

export function RequestBanner () {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchBanner() {
            const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            };
            
            try {
                const response = await fetch(`${API_URL}authentication`, options);
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResponseData(data)
            } catch (error) {
                setError(error)
            }    
        }
        fetchBanner();
    }, [])

};