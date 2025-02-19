import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full  mb-4 md:mb-0">
      <input
        type="text"
        placeholder="Search Tasks.....🔍"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded px-3 py-2"
      />{" "}
    </div>
  );
};

export default SearchBar;
