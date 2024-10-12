
interface Genre {
    id: number,
    name: string
}

const fetchGenres = async (): Promise<Genre[]> => {
    const res = await fetch('http://127.0.0.1:8000/api/genres/');
    return res.json();
}

export default fetchGenres