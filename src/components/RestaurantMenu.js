import { useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import RestaurantBanner from './RestaurantBanner';
import Loader from './Loader';
import RestaurantMenuCategory from './RestaurantMenuCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const resMenuBannerDetails = resMenu?.cards[2]?.card?.card?.info;

  const itemListsCategories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  if (resMenu === null) {
    return <Loader />;
  }
  return (
    <div>
      <RestaurantBanner resMenu={resMenuBannerDetails} />
      <div className='category-container  max-w-[60%] mx-auto py-4 outline-none border-none'>
        {itemListsCategories.map((category, index) => (
          <RestaurantMenuCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showCategory={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
