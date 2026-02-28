import { CATEGORY_URL } from "../utils/constants";

const RestaurantItem = ({ data }) => {
  console.log(data);
  const {
    name,
    price,
    defaultPrice,
    finalPrice,
    ratings,
    description,
    imageId,
  } = data?.card?.info;
  const { rating } = ratings.aggregatedRating;
  const actualPrice = price || defaultPrice;
  const hasDiscount = defaultPrice && finalPrice;
  return (
    <div className="flex w-6/12 justify-between m-auto p-4 border-y">
      <div className="text-left">
        <h3 className="font-bold text-lg text-gray-700 ">{name}</h3>
        {hasDiscount ? (
          <div className="font-semibold">
            <span className="line-through pr-4 text-gray-400">
              ₹{defaultPrice / 100}
            </span>
            <span>₹{finalPrice / 100}</span>
          </div>
        ) : (
          <div className="font-semibold">₹{actualPrice / 100}</div>
        )}

        {rating ? (
          <div>
            <span className="text-green-900 font-bold">
              ⭐{ratings.aggregatedRating.rating}
            </span>
            <span className="text-gray-700 font-bold">
              ({ratings.aggregatedRating.ratingCountV2})
            </span>
          </div>
        ) : null}
        <div className="text-gray-700 font-semibold">{description}</div>
      </div>
      <div>
        <img className="h-[150px] w-[200px]" src={CATEGORY_URL + imageId} />
        <span className=" relative bg-gray-800 text-white px-4 py-2 -top-3 rounded-lg cursor-pointer">Add +</span>
      </div>
    </div>
  );
};
export default RestaurantItem;
