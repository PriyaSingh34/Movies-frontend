import { createContext, useState } from "react";

export const MovieContext = createContext("");

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
