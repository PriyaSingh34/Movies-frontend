import React, { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import { MdNoAdultContent } from "react-icons/md";
import { Link } from "react-router-dom";
import { getMovieBySearch } from "../Axios/getMovie";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
// import { getAllMovies } from "../Axios/getMovie";

const Navbar = () => {
  const { setMovies } = useContext(MovieContext);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleSearch = async (e) => {
    try {
      const movies = await getMovieBySearch(e.target.value);
      setMovies(movies);
    } catch (e) {
      console.log("Error", e);
    }
  };

  //Usecallback for memomized version of the fuction
  const optimizedSeachMovieFunc = useCallback(debounce(handleSearch), []);

  return (
    <div className="shadow-md">
      <div className="container mx-auto py-6 px-2 grid grid-cols-[2fr_0.5fr] gap-2 justify-between items-center">
        <div className="">
          <form className="w-full bg-[#E0D5D5] text-sm rounded flex items-center gap-1">
            <button className="bg-[#F20000] w-12 h-12 rounded flex justify-center items-center text-white">
              <FaSearch size={18} />
            </button>
            <input
              type="search"
              required
              onChange={optimizedSeachMovieFunc}
              placeholder="Search your favourite Movie or Tv Show"
              className="w-full font-medium border-none outline-none placeholder:text-border text-sm h-10 focus:outline-none border-transparent focus:border-transparent focus:ring-0 bg-transparent p-2 text-black"
            />
          </form>
        </div>

        <div className="gap-5 font-medium text-base text-white flex justify-center items-center">
          <Link to="/favorite">
            <button className="btn1">Favorite</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
