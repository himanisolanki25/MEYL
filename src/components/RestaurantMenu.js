import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();

    // const timer = setInterval(()=>{
    //   console.log("I need to be cleaned")
    // },1000)

    // // return will be called during unmounting
    // return() => {
    //   // whatever you need to unmount
    //   clearInterval(timer);
    // }
  }, []);

  const {resId} = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL+resId,
    );
    const json = await data.json();
    console.log(json);

    setResMenu(json.data);
  };

  if (resMenu === null) return <Shimmer />;

  // Initially resMenu is null and hence if we will write this before the above condition then
  // we will get into an error
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} -{" "}
            {items.card.info.defaultPrice / 100 || items.card.info.price / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
        {/* We can write the map function using the above three list items syntax */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

// HOMEWORK
// All types of list recommended etc.
// veg only button
