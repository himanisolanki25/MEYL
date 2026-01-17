import { RES_URL } from "../utils/constants";

// WHEN HAVING A LIST OF RESTAURANTS
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    // first {} is telling there is some piece of JS inside
    // and second {} is JS object
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          RES_URL + cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      {/* .join(", ") => to get comma seperated cuisines */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

// WHEN HAVE A SINGLE JSON OBJECT
// const RestaurantCard = (props) => {
//   const { resData } = props;
//   return (
//     // first {} is telling there is some piece of JS inside
//     // and second {} is JS object
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           resData.info.cloudinaryImageId
//         }
//       />
//       <h3>{resData.info.name}</h3>
//       {/* .join(", ") => to get comma seperated cuisines */}
//       <h4>{resData.info.cuisines.join(", ")}</h4>
//       <h4>{resData.info.avgRating}</h4>
//       <h4>{resData.info.sla.deliveryTime} minutes</h4>
//     </div>
//   );
// };

// WHEN PASSING ALL PROPS IN THE TAG ITSELF
// const RestaurantCard = (props) => {
//   // instead of (props), we can also do it as ({resName, cuisine, rating})
//   return (
//     // first {} is telling there is some piece of JS inside
//     // and second {} is JS object
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img className="res-logo" alt="res-logo" src={props.pic} />
//       <h3>{props.resName}</h3>
//       <h4>{props.cuisine}</h4>
//       <h4>{props.rating}</h4>
//       <h4>{props.time}</h4>
//     </div>
//   );
// };

export default RestaurantCard;