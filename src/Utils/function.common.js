import dayjs from "dayjs";
import { Keyboard } from "react-native";

export const defineMinDate = () => {
  return dayjs("2000", "YYYY").startOf("year");
};

export const hideKeyboard = () => {
  Keyboard.dismiss();
};

export const getDateEndOfCurrentYear = () => {
  return dayjs().endOf("year");
};

export const formatDate = (date, format = "DD/MM/YYYY") => {
  return dayjs(date).format(format);
};

export const removeFormatCurrency = (number) => {
  return number?.toString()?.replace(/,/g, "");
};

export const formatCurrency = (number) => {
  const trimmedNumber = number?.toString().replace(/^0+/, "");
  return trimmedNumber?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const randomComponentId = () => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const keywords = [];

  for (let i = 0; i < 20; i++) {
    let keyword = "";

    // Generate a random keyword of length 5
    for (let j = 0; j < 5; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      keyword += characters.charAt(randomIndex);
    }

    keywords.push(keyword);
  }

  return keywords;
};
