import React from "react";
import MovieCard from "./MovieCard";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { TbPlayerTrackNext } from "react-icons/tb";
import { RiMovie2Line } from "react-icons/ri";

const MoviesContainer = ({ movies }) => {
  return movies?.length > 0 ? (
    <>
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-5 2xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
{/* Loading More */}
      {/* <div className="w-full flex flex-row items-center justify-center gap-4 md:my-20 my-10">
        <button disabled={page === 1} className={sameClass} onClick={prevPage}>
          <TbPlayerTrackPrev className="text-xl" />
        </button>
        <p>
          {" "}
          {page} of {pages}{" "}
        </p>
        <button
          disabled={page === pages}
          className={sameClass}
          onClick={nextPage}
        >
          <TbPlayerTrackNext className="text-xl" />
        </button>
      </div> */}
    </>
  ) : (
    <div className="w-full gap-6 flex flex-col justify-center items-center text-white h-[60vh]">
      <div className="w-24 h-24 p-5 rounded-full mb-4 bg-main text-subMain text-4xl flex-colo">
        <RiMovie2Line />
      </div>
      <p className="text-border text-sm">
        It seem's like we don't have this movie
      </p>
    </div>
  );
};

export default MoviesContainer;
