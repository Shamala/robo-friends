import React from "react";

const SearchBox = ({ searchText, setSearchText }) => {
  const onSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        value={searchText}
        placeholder="Search Robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
