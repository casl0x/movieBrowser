import { useEffect, useState } from "react";

let API_URL = import.meta.env.VITE_REACT_APP_API_URL;
let API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
let ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

export async function FetchBanner() {
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    };
            
    try {
        const response = await fetch(`${API_URL}authentication&${API_KEY}`, options);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.result.slice(0, 10)
    } catch (error) {
        console.error(error)
        throw new Error("Can't fetch the datas")
    }    
}