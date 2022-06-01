import React from "react";

//styles
import "./AdvertiseCard.scss";

function AdvertiseCard({ title, image, info }) {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img alt={title} className="card-img" src={image} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{info}</p>
    </div>
  );
}

export default AdvertiseCard;
