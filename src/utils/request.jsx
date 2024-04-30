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

export async function FetchNowPlaying() {         
    try {
        const response = await fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}`, options);
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

export async function FetchMovie(movieId) {         
    try {
        const response = await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }    
}

export async function FetchSerie(tvId) {         
    try {
        const response = await fetch(`${API_URL}tv/${tvId}?api_key=${API_KEY}`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }    
}

export async function FetchGenre () {         
    try {
        const response = await fetch(`${API_URL}genre/movie/list?api_key=${API_KEY}`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }    
}

export async function FetchRecommendatedMovies(movieId) {         
    try {
        const response = await fetch(`${API_URL}movie/${movieId}/recommendations?api_key=${API_KEY}`, options);
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

export async function FetchRecommendatedSeries(tvId) {         
    try {
        const response = await fetch(`${API_URL}tv/${tvId}/recommendations?api_key=${API_KEY}`, options);
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

export async function FetchAllMovie(page) {         
    try {
        const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}&page=${page}`, options);
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