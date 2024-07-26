import image from '../images/png/logo-black.png';
import { CAT_RES_MENU_URL } from '../utils/constants';

const RestaurantMenuCategoryInfo = ({ items }) => {
  console.log(items);
  return (
    <div className='accordion-content'>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className='flex justify-between shadow-md mb-6 pb-6'
        >
          <div className='content-details max-w-[60%] p-2'>
            <h1 className='font-bold'>{item?.card?.info?.name}</h1>
            <h5 className='font-bold'>₹{item?.card?.info?.price / 100}</h5>
            <p className='text-ellipsis overflow-hidden pb-2 w-[95%] h-[50px]'>
              {item?.card?.info?.description}
            </p>
          </div>
          <div className='content-image max-w-[30%] max-h-[150px] p-2 relative'>
            <div className='absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-2'>
              <button className='bg-white text-green-500 py-2 px-8 rounded-xl shadow-xl font-bold hover:bg-slate-200 transition-all duration-100 ease-in-out'>
                ADD
              </button>
            </div>
            <img
              src={CAT_RES_MENU_URL + item?.card?.info?.imageId}
              alt='Image'
              className='w-full h-full object-fill rounded-xl'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuCategoryInfo;
