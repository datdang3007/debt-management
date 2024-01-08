import AsyncStorage from "@react-native-async-storage/async-storage";

// Async storage function set:
export const AS_Set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

// Async storage function get:
export const AS_Get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      console.log("No data found for key:", key);
      return null;
    }
  } catch (error) {
    return null;
  }
};

// Async storage function remove:
export const AS_Remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data:", error);
  }
};
