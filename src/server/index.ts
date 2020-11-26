export const api = {
  baseUrl: 'https://swapi.dev/api',
  paths: {
    films: '/films/',
    people: '/people/',
    species: '/species/',
    starships: '/starships/',
  }
};

export const fetchData = async <T> (path: string) : Promise<T>  => {
  const response = await fetch(path);
  return await response.json();
};
