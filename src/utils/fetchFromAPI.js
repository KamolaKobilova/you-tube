import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// const options = {
//     method: 'GET',
//     url: 'https://youtube-v31.p.rapidapi.com/captions',
//     params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
//     headers: {
//       'X-RapidAPI-Key': 'aee9d7c348msh365dd1d9aa1718fp115e90jsncd27eab7e8c4',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   }