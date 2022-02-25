import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      const user = JSON.parse(value);
      return user;
    } else {
      return false;
    }
  } catch (error) {
    return false;
    // error reading value
  }
};

const getTokenFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      return value;
    } else {
      return false;
    }
  } catch (error) {
    return false;
    // error reading value
  }
};

const setUserToStorage = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem("user", jsonValue);
  } catch (error) {
    // error reading value
  }
};

const setTokenToStorage = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    // error reading value
  }
};

const clearStorage = async (token) => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    // error reading value
  }
};

export {
  getUserFromStorage,
  setUserToStorage,
  setTokenToStorage,
  getTokenFromStorage,
  clearStorage,
};
