import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useInternetStatus from './useInternetStatus';
import { FaCircleCheck } from 'react-icons/fa6';
import Loader from './Loader';

const Body = () => {
  const [resList, setNewResObj] = useState([]);

  const [filteredResList, setFilteredResList] = useState([]);

  const [inputText, setInputText] = useState('');

  const status = useInternetStatus();

  // console.log(inputText);
  // console.log('Body rendered');
  // console.log(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    setNewResObj(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (status === false) {
    return <h1>You are offline, please check your internet</h1>;
  }

  return resList.length === 0 ? (
    <Loader />
  ) : (
    <div className='body pt-16 font-poppins'>
      <div className='filter-btn flex items-center my-4 px-5 py-4 shadow-sm bg-slate-700'>
        <button
          className='btn bg-white text-black rounded-md px-3 text-lg mr-20 py-1 font-normal'
          onClick={() => {
            const newResObj = resList.filter((res) => res.info.avgRating > 4.5);
            setFilteredResList(newResObj);
          }}
        >
          Top Rated
          <FaCircleCheck className='inline-block ml-1 -mt-1' />
        </button>
        <div className='search'>
          <input
            type='text'
            className='search-input p-2 outline-none'
            value={inputText}
            onChange={(e) => {
              let text = e.target.value;
              setInputText(text);
            }}
          />
          <button
            className='btn bg-blue-500 text-white px-2 py-2'
            onClick={() => {
              const filteredText = resList.filter((res) =>
                res.info.name.toLowerCase().includes(inputText.toLowerCase())
              );
              setFilteredResList(filteredText);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className='res-container flex flex-wrap gap-6 max-w-[98%] p-2 my-1 mx-auto'>
        {filteredResList.map((restaurant) => (
          <Link
            to={'/restaurants/' + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
