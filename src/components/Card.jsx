import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div
      key={result.id}
      className="group cursor-pointer sm:hover:shadow-lg shadow-gray-900/10 rounded-lg p-4 transition-shadow duration-300 ease-in-out"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-50 transition-opacity duration-400 ease-in-out"
          alt={result.title || result.name}
        />
      </Link>
      <div>
        <h2 className="text-xl font-bold truncate">
          {result.title || result.name}
        </h2>
        <p className="text-sm line-clamp-2 text-gray-500">{result.overview}</p>
        <p className="flex items-center text-xs text-gray-500 justify-between">
          <span>{result.release_date || result.first_air_date}</span>
          <span className="flex items-center gap-1">
            <FiThumbsUp /> {result.vote_count.toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
}
