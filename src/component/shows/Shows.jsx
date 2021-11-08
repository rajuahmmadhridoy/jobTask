import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./shows.css";
const Shows = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    fetch(
      "https://api.tvmaze.com/search/shows?q=avengers&fbclid=IwAR1HxahjGIjuDZu3I_QEnqRrbbYi9f5Fe1lS7zMYQfMYeGTsajI84hDKsDU"
    )
      .then((res) => res.json())
      .then((item) => setData(item))
      .catch(err => setError(err))
  }, []);
  return (
    <div>
      {data.map((da) => (
        <div className="shows">
          <h3>Language: {da.show.language}</h3>
          <h3>Show name: {da.show.name}</h3>
          <h3>Genres:</h3>
          <h3>Runtime: {da.show.runtime}</h3>
          <h3>Premiered: {da.show.premiered}</h3>
          <h3>Average: {da.show.rating.average}</h3>
          <h3>Country: {da.show.network?.country?.name}</h3>
          <Link to={`/tv-shows/details/${da.show.id}`}><button>{da.show.name} </button></Link>
        </div>
      ))}
    </div>
  );
};

export default Shows;
