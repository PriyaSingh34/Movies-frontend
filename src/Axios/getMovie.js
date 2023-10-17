import axios from "axios";

const getMovieBySearch = async (query) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/movies/search?query=${query}`
  );

  console.log(response.data.data);
  return response.data.data;
};

const saveMovieToFav = async (movie) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/favorite`,
    movie
  );

  return response.data;
};

const getFavoriteMovies = async (movie) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/favorite`
  );

  return response.data.data;
};

// const getAllMovies = async () => {
//   try {
//     const response = await axios.get("proccess.env.BASE_URL/api/movies/all");
//     console.log(response.data.data);
//     return response.data.data;
//   } catch (error) {
//     console.error("Error:", error);
//     // Handle any errors here
//     throw error;
//   }
// };

export { getMovieBySearch, saveMovieToFav, getFavoriteMovies };
