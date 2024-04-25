let API_URL = "https://api.themoviedb.org/3/";
let API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
let ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
};

export async function FetchTopRated() {         
    try {
        const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`, options);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results
    } catch (error) {
        console.error(error)
        throw new Error("Can't fetch the datas")
    }    
}

export async function FetchUpcoming() {         
    try {
        const response = await fetch(`${API_URL}movie/upcoming?api_key=${API_KEY}`, options);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results
    } catch (error) {
        console.error(error)
        throw new Error("Can't fetch the datas")
    }    
}

export async function FetchPopularMovie() {         
    try {
        const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`, options);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results
    } catch (error) {
        console.error(error)
        throw new Error("Can't fetch the datas")
    }    
}

export async function FetchPopularSeries() {         
    try {
        const response = await fetch(`${API_URL}tv/popular?api_key=${API_KEY}`, options);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results
    } catch (error) {
        console.error(error)
        throw new Error("Can't fetch the datas")
    }    
}
