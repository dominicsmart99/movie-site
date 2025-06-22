"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length >= 2) {
      router.push(`/search/${search}`);
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="border p-2 rounded w-full "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 text-md font-semibold"
          disabled={search === "" || search.length < 2}
        >
          Search
        </button>
      </div>
    </form>
  );
}
