import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";

const rnBiometrics = new ReactNativeBiometrics();

// checking sensor
const checkSensor = () => {
  rnBiometrics.isSensorAvailable().then(async (resultObject) => {
    const { available, biometryType } = resultObject;
    if (available && biometryType === BiometryTypes.TouchID) {
      sendPrompt();
    } else if (available && biometryType === BiometryTypes.FaceID) {
      sendPrompt();
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      sendPrompt();
    } else {
      return;
    }
  });
};

// creating key
const createKey = async () => {
  try {
    rnBiometrics.createKeys().then(async (resultObject) => {
      const { publicKey } = resultObject;
      await AsyncStorage.setItem("Biometrics", "true");
      return true;
    });
  } catch (err) {
    toaster(`Error ${err.message}`, { color: black, duration: 2000 });
  }
};

// getting key
const getKey = async () => {
  try {
    rnBiometrics.biometricKeysExist().then(async (resultObject) => {
      const { keysExist } = resultObject;
      if (keysExist) {
        await AsyncStorage.setItem("Biometrics", "true");
        return true;
      } else {
        createKey();
      }
    });
  } catch (err) {
    toaster(`Error ${err.message}`, { color: black, duration: 2000 });
  }
};

// sending Prompt
const sendPrompt = async () => {
  await rnBiometrics
    .simplePrompt({
      promptMessage: "Sign in",
      fallbackPromptMessage: "Error in finger print",
      cancelButtonText: "Cancel",
    })
    .then(async (result) => {
      const { success, error } = result;
      if (success) {
        getKey();
      } else {
        await AsyncStorage.setItem("Biometrics", "false");
        toaster("You canceled sign with finger print", {
          color: black,
          duration: 2000,
        });
        return true;
      }
    })
    .catch((err) => {
      toaster(err.message, { color: black, duration: 2000 });
    });
};

// login with biometics
export const biometricLogin = (navigation) => {
  return async (dispatch) => {
    try {
      let propmt = await rnBiometrics.simplePrompt({
        promptMessage: "Confirm fingerprint",
        fallbackPromptMessage: "Error in finger print",
        cancelButtonText: "Cancel",
      });
      let { success } = propmt;
      let userInfo = JSON.parse(await AsyncStorage.getItem("user_data"));
      let { email, password } = userInfo;
      if (success && userInfo) {
        let data = { email, password };
        const response = await loginRequest(data);
        if (response.status) {
          dispatch({ type: STOP_OVERLAY_LOADING });
          await AsyncStorage.setItem("access_token", response.token);
          AsyncStorage.removeItem("user_address");
          AsyncStorage.removeItem("guest_address");
          AsyncStorage.removeItem("payment_method");
          await AsyncStorage.setItem("user_data", JSON.stringify(userInfo));
          toaster(I18n.t("successLogIn"), { color: black, duration: 2000 });
          navigateToHome(navigation);
        } else {
          toaster(I18n.t("connectionFailed"), { color: black, duration: 2000 });
        }
      } else {
        toaster("Canceled Login with TouchID / FaceID", {
          color: black,
          duration: 2000,
        });
        navigateToAuth(navigation);
      }
    } catch (er) {
      toaster(er.message, { color: black, duration: 2000 });
    }
  };
};
