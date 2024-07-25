import { RES_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData.info.cuisines);
  return (
    <div className='res-card-container w-[225px] h-[275px] shadow-md rounded-md hover:scale-95 transition-transform duration-200 ease-in-out'>
      <div className='res-image max-w-full h-[50%] flex-1'>
        <img
          src={RES_URL + resData.info.cloudinaryImageId}
          alt='Restaurant Image'
          className='w-[100%] h-[100%] object-cover no-repeat rounded-lg'
        />
      </div>
      <div className='res-details flex flex-col justify-around flex-1 mx-2 my-2'>
        <h4 className='truncate font-bold'>{resData.info.name}</h4>
        <p className='font-semibold'>{resData.info.avgRating}</p>
        <p className='font-medium'>{resData.info.sla.slaString}</p>
        <p className='truncate max-w-full'>
          {resData.info.cuisines.join(', ')}
        </p>
        <h4>{resData.info.locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
