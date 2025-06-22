import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import Image from "next/image";

export default async function TVPage({ params }) {
  console.log("Params:", await params);
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.API_KEY}`,
    {
      next: { revalidate: 10000 }, // Revalidate every 10 seconds
    }
  );

  const movie = await res.json();
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          width={300}
          height={500}
          className="sm:rounded-t-lg group-hover:opacity-50 transition-opacity duration-400 ease-in-out"
          alt={movie.title || movie.name}
        />
        <div>
          <h2 className="text-4xl font-bold truncate">
            {movie.title || movie.name}
          </h2>
          <p className="text-md py-5">{movie.overview}</p>
          <p className="text-md">
            Date Released: {movie.release_date || movie.first_air_date}
          </p>
          <p className="text-md py-5 flex items-center gap-1">
            <FiThumbsUp /> {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
