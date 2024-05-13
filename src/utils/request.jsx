let API_URL = "https://api.themoviedb.org/3/";
let API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
let ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
};

// homepage
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

// solo movie page
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


// solo serie page
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

// all movies page
export async function FetchAllMovie() {
    try {
        const page1 = (`${API_URL}movie/popular?api_key=${API_KEY}&page=1`)
        const page2 = (`${API_URL}movie/popular?api_key=${API_KEY}&page=2`)
        const page3 = (`${API_URL}movie/popular?api_key=${API_KEY}&page=3`)
        const page4 = (`${API_URL}movie/popular?api_key=${API_KEY}&page=4`)
        const page5 = (`${API_URL}movie/popular?api_key=${API_KEY}&page=5`)

        const response = await Promise.all([fetch(page1, options), fetch(page2, options), fetch(page3, options), fetch(page4, options), fetch(page5, options)])

        for (const res of response) {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
        }

        const data = await Promise.all(response.map(res => res.json()));

        const allMoviesData = data.reduce((acc, curr) => acc.concat(curr.results), []);

        return allMoviesData;
    } catch (error) {
        console.error(error)
        throw new Error("Can't fetch the datas")
    }    
}

// all series page
export async function FetchAllSerie() {
    try {
        const page1 = (`${API_URL}tv/popular?api_key=${API_KEY}&page=1`)
        const page2 = (`${API_URL}tv/popular?api_key=${API_KEY}&page=2`)
        const page3 = (`${API_URL}tv/popular?api_key=${API_KEY}&page=3`)
        const page4 = (`${API_URL}tv/popular?api_key=${API_KEY}&page=4`)
        const page5 = (`${API_URL}tv/popular?api_key=${API_KEY}&page=5`)

        const response = await Promise.all([fetch(page1, options), fetch(page2, options), fetch(page3, options), fetch(page4, options), fetch(page5, options)])

        for (const res of response) {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
        }

        const data = await Promise.all(response.map(res => res.json()));

        const allMoviesData = data.reduce((acc, curr) => acc.concat(curr.results), []);

        return allMoviesData;
    } catch (error) {
        console.error(error)
        throw new Error("Can't fetch the datas")
    }    
}

// other
export async function FetchGenre (genreId) {         
    try {
        const response = await fetch(`${API_URL}genre/movie/list?api_key=${API_KEY}`, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const findGenre = data.genres.find(genre => genre.id === parseInt(genreId))
        return findGenre ? [findGenre] : [] 
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }    
}