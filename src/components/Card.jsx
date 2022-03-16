import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, img, population, region, capital, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card shadow-md rounded-3 mb-5 mx-1"
      style={{ width: "260px" }}
      onClick={(_) => navigate(`/${id}`)}
    >
      <img src={img} className="card-img-top w-100 " alt="..." />
      <div className="card-body">
        <h5 className="card-title mb-3 fw-bolder">{title}</h5>
        <p className="card-text mb-2">
          <span className="fw-bold">Population: </span>
          {population}
        </p>
        <p className="card-text mb-2">
          <span className="fw-bold">Region: </span>
          {region}
        </p>
        <p className="card-text mb-2">
          <span className="fw-bold">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
