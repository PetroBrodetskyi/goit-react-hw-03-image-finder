import axios from 'axios';

const apiKey = '39760992-bd564f72a97718cc10783b18b';
const perPage = 12;

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: apiKey,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: perPage,
};



export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};