
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=e5e20287e27a4c329929a275f3bde1d4";

export async function getNews() {

  let result = await fetch(url).then(response => response.json());
  return result.articles;
  
}