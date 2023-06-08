// import i18n from "i18n-js";
import { I18nManager } from "react-native";
import RNRestart from "react-native-restart";
import AsyncStorage from "@react-native-community/async-storage";

i18n.locale = undefined;
i18n.setLanguage = async (lang, restart = true) => {
  if (restart) {
    const langPreset = await AsyncStorage.getItem("lang");
    // console.log('langPreset', langPreset);
    // console.log('lang', lang);
    if (lang === langPreset) {
      return;
    }
  }
  i18n.locale = lang;
  await AsyncStorage.setItem("lang", lang);
  if (lang === "ar") {
    I18nManager.forceRTL(true);
    if (restart) {
      RNRestart.Restart();
    }
  } else if (I18nManager.isRTL) {
    I18nManager.forceRTL(false);
    if (restart) {
      RNRestart.Restart();
    }
  } else {
    RNRestart.Restart();
  }
};
i18n.config = async (lang) => {
  i18n.fallbacks = true;
  await i18n.setLanguage(lang, false);
  i18n.start = I18nManager.isRTL ? "right" : "left";
  i18n.end = I18nManager.isRTL ? "left" : "right";
};

export default i18n;
