import { FaAngleDown } from 'react-icons/fa6';
import RestaurantMenuCategoryInfo from './RestaurantMenuCategoryInfo';

const RestaurantMenuCategory = ({ data, showCategory, setShowIndex }) => {
  const handleCategory = () => {
    setShowIndex();
  };

  return (
    <div className='accordion-container shadow-md rounded-lg'>
      <div className='accordion p-3 my-4'>
        <div
          className='accordion.header flex justify-between items-center mb-4 cursor-pointer'
          onClick={handleCategory}
        >
          <h1 className='font-bold text-xl py-2'>
            {data.title} ({data?.itemCards.length})
          </h1>
          <FaAngleDown className='text-xl mr-1' />
        </div>
        {showCategory && <RestaurantMenuCategoryInfo items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
