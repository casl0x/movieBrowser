let API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
let ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

export async function RequestBanner () {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
            {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        );
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        return data.results.slice(0, 10);
    } catch (error) {
        console.error(error);
        throw new Error("Can't fetch the datas");
    }   
};