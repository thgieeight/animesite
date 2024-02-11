// services/searchService.js
import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

const searchAnime = async (query) => {
  const url = `${BASE_URL}/anime?q=${query}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error searching for anime:', error);
    throw error;
  }
};

const searchMovies = async (query) => {
  const url = `${BASE_URL}/anime?q=${query}&type=movie`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error searching for movies:', error);
    throw error;
  }
};

const searchCharacters = async (query) => {
  const url = `${BASE_URL}/characters?q=${query}`;
  try {
    const response = await axios.get(url);
    return response.data.data; 
  } catch (error) {
    console.error('Error searching for character:', error);
    throw error;
  }
};

const searchManga = async (query) => {
  const url = `${BASE_URL}/manga?q=${query}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error searching for manga:', error);
    throw error;
  }
};


export { searchAnime, searchMovies, searchCharacters, searchManga };
