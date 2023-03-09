import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      return await response.json();
    };
    fetchUsers().then((users) => {
      if (users) setRobots(users);
    });
  }, []);

  const filteredRobots = robots?.filter((robot) =>
    robot.name.toLowerCase().includes(searchText.toLowerCase())
  );

  let content;
  if (!robots.length) {
    content = <h1 className="f1 tc">Loading</h1>;
  } else {
    content = (
      <>
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </>
    );

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Scroll>{content}</Scroll>
      </div>
    );
  }
  return content;
};

export default App;
