import validator from "validator";

import {
  regForSymbols,
  regForName,
  regForPassword,
  validationMessages,
} from "./constants";

export const isEmail = (email) => {
  return !validator.isEmail(email) ? validationMessages.email : "";
};

export const isName = (string) => {
  const name = String(string).toLowerCase();
  const haveSymbols = regForSymbols.test(name);
  const singleMatch = name.match(regForName).length;
  return singleMatch > 1 || haveSymbols ? validationMessages.name : "";
};

export const isPassword = (string) => {
  const password = String(string).toLowerCase();
  const haveSymbols = regForSymbols.test(password);
  const singleMatch = password.match(regForPassword).length;
  return singleMatch > 1 || haveSymbols ? validationMessages.password : "";
};
