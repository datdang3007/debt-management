import { Language } from "../constants";
import { removeFormatCurrency } from "./function.common";

export const moneyRules = (isRequired) => {
  return {
    required: isRequired && Language.Rules.Required,
    pattern: {
      value: /^(?!0\d)[\d,]+$/,
      message: Language.Rules.WrongFormat,
    },
    validate: (value) => {
      return (
        Number(removeFormatCurrency(value)) > 0 ||
        Language.Rules.NumberIsHigherThanZero
      );
    },
  };
};

export const dateRules = (isRequired) => {
  return {
    required: isRequired && Language.Rules.Required,
  };
};

export const simpleInputRules = (isRequired) => {
  return {
    required: isRequired && Language.Rules.Required,
  };
};

export const pickerRules = (isRequired) => {
  return {
    required: isRequired && Language.Rules.Required,
  };
};
