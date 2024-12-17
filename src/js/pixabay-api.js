import axios from 'axios';
const API_KEY = '47491197-d7346e1a6b6c8bc0fb7fb6a4d';
const URL = 'https://pixabay.com/api/';

export async function pixabayCreate(query, page) {
  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error not found images: ', error);
  }
}
