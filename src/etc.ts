const getResponse = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok`);
  }
  return response;
};

export const API_URL = 'https://www.fruityvice.com/api/fruit/all';
export const LOCAL_URI = '/fruits.json';

export async function queryFruits() {
  return (await getResponse(LOCAL_URI)).json();
}
