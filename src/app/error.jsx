"use client";
import React, { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.error("An error occurred:", error);
    // Optionally, you can log the error to an external service here
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1>Something went wrong. Please try again later.</h1>
      <button onClick={() => reset()} className="hover:text-amber-400 mt-5">
        Try Again
      </button>
    </div>
  );
}
