import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

export const Placeholder = () => {
  return (
    <div
      className="card placeholder-glow shadow-md rounded-3 mb-5 mx-1"
      style={{ width: "260px" }}
    >
      <span
        style={{ height: "140px" }}
        className="card-img-top placeholder w-100"
      />
      <div className="card-body ">
        <span className="placeholder col-10 mb-4"></span>
        <p className="card-text mb-3 ">
          <span className="placeholder col-3 me-2"> </span>
          <span className="placeholder col-3"></span>
        </p>
        <p className="card-text mb-3 ">
          <span className="placeholder col-4 me-2"> </span>
          <span className="placeholder col-3"></span>
        </p>
        <p className="card-text mb-3 ">
          <span className="placeholder col-6 me-2"> </span>
          <span className="placeholder col-3"></span>
        </p>
      </div>
    </div>
  );
};

const Cards = () => {
  const [source, setSoure] = useOutletContext();
  const list = useSelector((state) => state);

  return (
    <div className="px-5 cards d-flex justify-content-between mt-3 flex-wrap align-items-center">
      {source.length == 0 && list.length == 0 ? (
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      ) : source.length != 0 && list.length == 0 ? (
        <div className="d-flex justify-content-center align-items-center  w-100 no-search-country">
          There is no country with that name...
        </div>
      ) : (
        list.map((l, i) => (
          <Card
            key={i}
            id={i}
            title={l.name.common}
            img={l.flags.png}
            population={l.population}
            capital={l.capital}
            region={l.region}
          />
        ))
      )}
    </div>
  );
};

export default Cards;
