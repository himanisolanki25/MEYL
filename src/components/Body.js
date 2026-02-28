import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
// no longer need this resList. Getting data from the live data
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  // const cards = []
  // for(let i=0;i<resList.length;i++){
  //   cards.push(
  //     <RestaurantCard key={resList[i].info.id}  resData={resList[i]}/>
  //   )
  // }
  // Not a good practice to use for loop

  // const [ListOfRestaurant, setListOfRestaurant] = useState(resList);
  // Initially jbtk data fetch na ho, ListOfRestaurant should be empty. and we should get
  // to see an empty page until then.
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // HIGHER ORDER COMPONENT
  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Body Rendered!", ListOfRestaurant);

  useEffect(() => {
    fetchData();
    console.log("UseEffect Called!");
  }, []);

  // Using https://corsproxy.io/? to bypass cors error
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1",
    );
    const json = await data.json();
    console.log(json);

    // not a good way to write like this, will use optional chaining
    // setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const {loggedInUser, setUserName} = useContext(UserContext)

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1 className="offline-status">It's not you. It's us.</h1>;

  // Conditional Rendering - Rendering on the basis of condition
  // if(ListOfRestaurant.length===0){
  //   return <Shimmer/>
  // }

  // Not using keys (not acceptable) <<<< index as key <<<< unique id (best practice)
  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex m-4 gap-16">
        <div className="search flex gap-4">
          <input
            type="text"
            className="search-box border border-gray-300 px-4 py-2 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* Yaha input mein jo bhi daal rhe h that is searchText */}
          {/* to take the input value from the input box we will write "value"
          and will have need to bind this input box with a local state variable */}
          <button
            className="bg-orange-500 rounded-md px-4 py-2"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // for that, searchText from the input
              const searchedRes = ListOfRestaurant.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                // converting both to lower case before matching
              );
              setFilteredRestaurant(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className=" border border-orange-500 py-2 px-4 rounded-md"
            onClick={() => {
              const filterRestaurant = filteredRestaurant.filter(
                (res) => res.info.avgRating >= 4.5,
              );
              setFilteredRestaurant(filterRestaurant);
              // console.log(ListOfRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex gap-4">
          <label className="my-auto">Change loggedInUser</label>
          <input
            type="text"
            value={loggedInUser}
            className="border border-gray-300 px-4 py-2 rounded-md text-gray-300"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {/* {cards} */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is promoted then add a promoted label to it. */}
            {/* {
              restaurant.data.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            } */}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {/* Initially placed the key in the <RestaurantCard> but when used link, moved it there as key should be in the parent jsx */}
        {/* Some people also use index as a key. In that case, we have 2nd parameter index
        which increases by 1 everytime looping on the resList */}
        {/* {resList.map((restaurant, index) => 
          <RestaurantCard key={index} resData={restaurant}/>
        )} */}
      </div>
    </div>
  );
};

export default Body;
