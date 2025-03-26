import React, { useState } from "react";

export default function SearchBar({ placeholder, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass the search query to the parent component
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder={placeholder || "Search..."}
      className="w-full h-8 p-2 border border-blue-900 rounded-lg bg-gray-200"
    />
  );
}
