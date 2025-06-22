import React from "react";
import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  console.log("Search Term:", searchTerm);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1`
  );
  const data = await res.json();
  const results = data.results;
  return <Results results={results} />;
}
