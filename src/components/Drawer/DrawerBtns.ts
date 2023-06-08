import {IMAGES} from '../../constants/Images';

type button = {
  title: string;
  icon: string;
};

export const DrawerBtns: button[] = [
  {title: 'Home', icon: IMAGES.home},
  {title: 'Profile', icon: IMAGES.user},
  {title: 'Settings', icon: IMAGES.settings},
  {title: 'Notifications', icon: IMAGES.bell},
];
