import { RES_URL } from "../utils/constants";

// WHEN HAVING A LIST OF RESTAURANTS
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    // first {} is telling there is some piece of JS inside
    // and second {} is JS object
    <div className="res-card w-[300px] h-[500px] m-10 rounded-md" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo h-[250px] w-full rounded-md"
        alt="res-logo"
        src={
          RES_URL + cloudinaryImageId
        }
      />
      <h3 className="px-4 pt-4 text-xl font-bold">{name}</h3>
      {/* .join(", ") => to get comma seperated cuisines */}
      <h4 className="px-4">{cuisines.join(", ")}</h4>
      <h4 className="px-4">{avgRating}</h4>
      <h4 className="px-4">{costForTwo}</h4>
      <h4 className="px-4 pb-4">{sla.slaString}</h4>
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

// HIGHER ORDER COMPONENT
// This is a Higher Order Component. This takes RestaurantCard as an input and it returns function here a
// component that returns a piece of jsx.
// and this component is the enhanced version of restaurant card as it is adding the promoted label to it.
// will import it in Body.js
// In case of our api we dont have promoted label and hence commenting it.
export const withPromotedLabel = (RestaurantCard) => {
  // why passing props in this return as the inner return is being returned while calling the
  // label tag
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        {/* We have to pass the same data received to our res cards */}
        <RestaurantCard {...props}/>
        {/* ...props => spread operator => it will pass all the data to the restaurant card.
        We are not modifying the restaurant card. We are adding more data to it. hence using spread operator */}
      </div>
    )
  }
}

export default RestaurantCard;