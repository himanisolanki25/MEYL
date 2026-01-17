import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=752411&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(data);
    console.log(json);
  }
  return (
    <div>
      <h1>Restaurant Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Cake</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
