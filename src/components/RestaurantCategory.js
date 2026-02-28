import { useEffect, useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantCategory = ({ data, isActive, onShow }) => {
  // const [hideItems, setHideItems]=useState(true);

//   console.log("data: ",data);
  const itemCards = data?.card?.card?.itemCards;
//   console.log(itemCards)
  // console.log("HideItems: ", hideItems)
  return (
    <>
      {/* <div className="w-6/12 bg-gray-100 m-auto flex justify-between my-4 p-4 shadow-md hover:shadow-lg cursor-pointer"
        onClick={() => {
            hideItems ? setHideItems(false) : setHideItems(true);
        }}
        > */}
      <div
        className="w-6/12 bg-gray-100 m-auto flex justify-between my-4 p-4 shadow-md hover:shadow-lg cursor-pointer"
        onClick={onShow}
      >
        {/* Header */}
        <div className="font-semibold">
          {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
        </div>
        <div>👇</div>
        {/* Accordion Body */}
      </div>
      {isActive ? (
        <div className="">
          {itemCards.map((item) => (
            <RestaurantItem data={item} />
          ))}
        </div>
      ) : null}
      {/* {hideItems ? null : (
        <div className="">
          {itemCards.map((item) => (
            <RestaurantItem data={item} />
          ))}
        </div>
      )} */}
      {/* <div className="">
            {itemCards.map((item) => <RestaurantItem data={item}/>)}
        </div> */}
    </>
  );
};

export default RestaurantCategory;
