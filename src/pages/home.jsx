import React from "react";
import Navbar from "../components/Navbar";
import MoviesContainer from "../components/MoviesContainer";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="min-h-screen bg-[#080A1A]">
      <Navbar />

      <div className="px-2 md:px-6 py-10">
        <MoviesContainer movies={movies} />
      </div>
    </div>
  );
};

export default Home;
