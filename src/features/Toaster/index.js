import Toast from "react-native-toast-message";

export const showToast = (type, text1, text2, visibilityTime, autoHide) => {
  Toast.show({
    type,
    text1,
    text2,
    visibilityTime,
    autoHide,
  });
};
