import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
// no longer need this resList. Getting data from the live data
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log('Body Rendered!')
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

  useEffect(() => {
    fetchData();
    console.log('UseEffect Called!')
  }, []);

  // Using https://corsproxy.io/? to bypass cors error
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // not a good way to write like this, will use optional chaining
    // setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering - Rendering on the basis of condition
  // if(ListOfRestaurant.length===0){
  //   return <Shimmer/>
  // }

  // Not using keys (not acceptable) <<<< index as key <<<< unique id (best practice)
  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* Yaha input mein jo bhi daal rhe h that is searchText */}
          {/* to take the input value from the input box we will write "value"
          and will have need to bind this input box with a local state variable */}
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // for that, searchText from the input
              const searchedRes = ListOfRestaurant.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                // converting both to lower case before matching
              );
              setFilteredRestaurant(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurant = filteredRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurant(filterRestaurant);
            // console.log(ListOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {cards} */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
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
