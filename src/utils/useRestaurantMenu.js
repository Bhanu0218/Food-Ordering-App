import { useEffect, useState } from 'react';
import { RES_MENU_URL } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();

  console.log(resInfo);

  useEffect(() => {
    fetchResMenu(resId);
  }, []);

  const fetchResMenu = async (resId) => {
    const data = await fetch(
      RES_MENU_URL + resId + '&catalog_qa=undefined&submitAction=ENTER'
    );

    const json = await data.json();

    setResInfo(json?.data?.cards[2]?.card?.card?.info);
  };

  return resInfo;
};

export default useRestaurantMenu;
