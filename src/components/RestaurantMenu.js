import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import RestaurantBanner from './RestaurantBanner';
import Loader from './Loader';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);
  console.log(resMenu);

  if (resMenu === 0) {
    return <Loader />;
  }
  return (
    <div>
      <RestaurantBanner resMenu={resMenu} />
    </div>
  );
};

export default RestaurantMenu;
