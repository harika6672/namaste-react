import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resData, setResData] = useState(restaurants);
  return (
    <div className="body">
      <div className="search">
        <input type="textbox" />
        <button
          onClick={() => {
            const filteredResData = resData.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResData(filteredResData);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
