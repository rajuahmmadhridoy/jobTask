import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import './Show.css'
const Show = () => {
    const {id} = useParams()
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/search/shows?q=avengers&fbclid=IwAR1HxahjGIjuDZu3I_QEnqRrbbYi9f5Fe1lS7zMYQfMYeGTsajI84hDKsDU/`
    )
      .then((res) => res.json())
      .then((item) => setData(item));
  }, []);
  const detailes = data.find(fa => fa.show.id == id);
//   console.log(detailes);
    return (
      <div className="show">
          <div className="showImg">
          <img src={detailes?.show.image?.original} alt="" />
          </div>
          <h3>Show name: {detailes?.show.name}</h3>
          <h3>Language: {detailes?.show.language}</h3>
          <h3>Genres:</h3>
          <h3>Runtime: {detailes?.show.runtime}</h3>
          <h3>Premiered: {detailes?.show.premiered}</h3>
          <h3>Average: {detailes?.show.rating.average}</h3>
          <h3>Country: {detailes?.show.network?.country?.name}</h3>
        </div>
    );
};

export default Show;