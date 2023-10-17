import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFavoriteMovies } from "../Axios/getMovie";

const FavoriteMovies = () => {
  const [fav, setFev] = useState([]);

  useEffect(() => {
    const getFavMovies = async () => {
      try {
        const movies = await getFavoriteMovies();

        setFev(movies);
      } catch (e) {
        console.log("Err", e);
      }
    };

    getFavMovies();
  }, []);

  const deleteFavorites = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/api/favorite/${id}`)
      .then((response) => {
        console.log(response.data);
        setFev((prevFav) => prevFav.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });

    // .then(
    //   axios
    //     .get(`${process.env.REACT_APP_BASE_URL}/api/favorite`)
    //     .then((response) => {
    //       setFev(response.data);
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     })
    // );
  };

  return (
    <>
      {fav.message === "No Favorite found" ? (
        <h1 className="p-2">Nothing is added into our favorite</h1>
      ) : (
        <div className="min-h-screen bg-[#080A1A]">
          <div className="px-2 md:px-6 py-10">
            <h2 className="text-white text-2xl font-bold mb-4">
              Your Favorite Movies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {fav.map((result) => (
                <div
                  className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
                  key={result.imdbID}
                >
                  <div className="contain">
                    <img
                      src={result.Poster}
                      className="w-full h-80 object-cover"
                      alt={result.Title}
                    />
                    <div className="absolute w-20 p-2 top-1 right-1 bg-[#080A1A] border rounded-md border-gray-200 text-white hover:text-red-500">
                      <button
                        onClick={() => {
                          deleteFavorites(result._id);
                        }}
                      >
                        remove
                      </button>
                    </div>
                    <div className="absolute flex justify-between items-center gap-2 bottom-0 right-0 left-0 bg-[#080A1A] bg-opacity-60 px-4 py-3 text-white">
                      <h3 className="font-semibold">{result.Title}</h3>
                      <p className="mt-3">Year: {result.Year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoriteMovies;
