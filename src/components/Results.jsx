import React from "react";

export default function Results({ results }) {
  if (!results || results.length === 0) {
    return <div>No results found</div>;
  }
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id} className="p-4">
            <h2 className="text-xl font-bold">{result.title || result.name}</h2>
            <p className="text-gray-600">{result.overview}</p>
            <p className="text-sm text-gray-500">
              Release Date: {result.release_date || result.first_air_date}
            </p>
          </div>
        );
      })}
    </div>
  );
}
