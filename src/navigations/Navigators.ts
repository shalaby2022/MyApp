////////////          Stacks           ////////////
export const NavigateToHome = (navigation: any) => {
  return navigation.navigate('Home');
};

export const NavigateToMovies = (navigation: any) => {
  return navigation.navigate('Movies');
};

export const NavigateToMovie = (navigation: any, data: {}) => {
  return navigation.navigate('Movie', {data});
};

export const NavigateToEpisodes = (navigation: any) => {
  return navigation.navigate('Episodes');
};

export const NavigateToEpisode = (navigation: any, data: {}) => {
  return navigation.navigate('Episode', {data});
};

export const NavigatePeople = (navigation: any) => {
  return navigation.navigate('People');
};

export const NavigateToCharacter = (navigation: any, data: {}) => {
  return navigation.navigate('Character', {data});
};

export const NavigateToSearch = (navigation: any) => {
  return navigation.navigate('Search');
};

export const NavigateToWishList = (navigation: any) => {
  return navigation.navigate('WishList');
};

export const NavigateBack = (navigation: any) => {
  return navigation.goBack();
};

////////////          Drawer           ////////////
export const NavigateToProfile = (navigation: any) => {
  return navigation.navigate('Profile');
};
export const NavigateToSettings = (navigation: any) => {
  return navigation.navigate('Settings');
};

export const NavigateToNotifications = (navigation: any) => {
  return navigation.navigate('Notifications');
};

export const openDrawer = (navigation: any) => {
  return navigation.openDrawer();
};

export const toggleDrawer = (navigation: any) => {
  return navigation.toggleDrawer();
};

export const closeDrawer = (navigation: any) => {
  return navigation.closeDrawer();
};
