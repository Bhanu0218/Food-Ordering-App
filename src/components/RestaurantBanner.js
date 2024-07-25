import star from '../images/svg_images/star-svgrepo-com.svg';
import location from '../images/svg_images/placeholder-svgrepo-com.svg';
import delivery from '../images/svg_images/man-doing-bicycle-delivery-svgrepo-com.svg';
import deal from '../images/svg_images/deal-svgrepo-com.svg';
import discount from '../images/svg_images/discount-svgrepo-com.svg';
import food from '../images/svg_images/food-svgrepo-com.svg';
import time from '../images/svg_images/timer-svgrepo-com.svg';
import { Link } from 'react-router-dom';

const RestaurantBanner = (props) => {
  const { resMenu } = props;
  return (
    <div className='resMenu-container h-lvh max-w-[60%] mx-auto my-2 pt-24'>
      <p className='font-thin text-sm'>
        <Link to={'/'} className='pl-3'>
          Home
        </Link>
        /Menu
      </p>
      <div className='res-Menu h-[70%] w-full bg-gradient-to-b from-white to-[#DFDFE7] rounded-3xl relative'>
        <h2 className='px-4 pt-10 font-bold text-3xl'>{resMenu?.name}</h2>
        <div className='category flex gap-4 px-4 pt-4 font-semibold text-xl border-b-2 border-slate-400'>
          <h2 className='border-b-4 border-red-600'>Order Online</h2>
          <h2>DineOut</h2>
        </div>
        <div className='res-details-container bg-white rounded-2xl w-[96%] mx-auto absolute bottom-4 left-3 p-4 flex flex-col gap-2 font-semibold'>
          <div className='rating-costs flex'>
            <img src={star} alt='Star' className='svg-img w-6 h-6 mr-2' />
            <h5>
              {resMenu?.avgRating} | {resMenu?.totalRatingsString}
            </h5>
            <span className='ml-2'>
              <h5> {resMenu?.costForTwoMessage}</h5>
            </span>
          </div>
          <div className='cuisines flex'>
            <img
              src={food}
              alt='food'
              className='svg-img-location w-6 h-6 mr-2'
            />
            <h5>{resMenu?.cuisines?.join(', ')}</h5>
          </div>
          <div className='location-time flex'>
            <img
              src={location}
              alt='Location'
              className='svg-img-location w-6 h-6 mr-2'
            />
            <p>{resMenu?.areaName}</p>
          </div>
          <div className='delivery-time flex'>
            <img
              src={time}
              alt='time'
              className='svg-img-location w-6 h-6 mr-2'
            />
            <h5>{resMenu?.sla?.slaString}</h5>
          </div>
          <div className='distance-time flex'>
            <img
              src={delivery}
              alt='Delivery Boy'
              className='svg-img-cycle w-6 h-6 mr-2'
            />
            <p> ₹45 delivery charges may apply</p>
          </div>
        </div>
      </div>
      <div className='deals my-2 py-2 px-2'>
        <h3 className='font-bold text-xl pb-4'>Deals For You</h3>
        <div className='deals-container flex gap-4'>
          <div className='deal flex flex-1 border-2 rounded-xl p-3 align-middle'>
            <div className='img-container'>
              <img
                src={deal}
                alt='deals'
                className='deals-img w-10 h-10 mr-2 mt-1'
              />
            </div>
            <div className='deal-details font-medium'>
              <h5>50% Off Upto ₹100</h5>
              <p>USE SWIGGY50</p>
            </div>
          </div>
          <div className='discount flex flex-1 border-2 rounded-xl p-3'>
            <div className='img-container'>
              <img
                src={discount}
                alt='Discounts'
                className='deals-img w-10 h-10 mr-2 mt-1'
              />
            </div>
            <div className='discount-details font-medium'>
              <h5>50% Off Upto ₹100</h5>
              <p>USE SWIGGY50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBanner;
