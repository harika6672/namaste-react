import { resImageURL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, cloudinaryImageId, sla } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={`${resImageURL}/${cloudinaryImageId}`}
        alt="res-image"
      />
      <h3>{name}</h3>
      <p>{cuisines ?? "Cuisines"}</p>
      <div className="card-third-line">
        <h4>{avgRating} Rating</h4>
        <h4>{sla.deliveryTime ?? "0min"}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
