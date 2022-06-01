import React from "react";

//components
import AdvertiseCard from "./AdvertiseCard/AdvertiseCard";

//data
import { advertisements } from "../../Data/Data";

//styles
import "./Advertise.scss";

function Advertise() {
  return (
    <div className="advertise-container">
      {advertisements.map((item) => {
        return (
          <AdvertiseCard
            key={item.id}
            title={item.title}
            image={item.image}
            info={item.info}
          />
        );
      })}
      <div className="green-line"></div>
    </div>
  );
}

export default Advertise;
