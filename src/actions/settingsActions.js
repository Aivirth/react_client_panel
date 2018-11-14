import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "./types";

export const setDisableBalanceOnAdd = () => {
  //? Modify LocalStorage
  const settings = JSON.parse(localStorage.getItem("settings"));
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  localStorage.setItem("settings", JSON.stringify(settings));

  //Trigger state change
  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};
export const setDisableBalanceOnEdit = () => {
  //? Modify LocalStorage
  const settings = JSON.parse(localStorage.getItem("settings"));
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  localStorage.setItem("settings", JSON.stringify(settings));

  //Trigger state change
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};
export const setAllowRegistration = () => {
  //? Modify LocalStorage
  const settings = JSON.parse(localStorage.getItem("settings"));
  settings.allowRegistration = !settings.allowRegistration;
  localStorage.setItem("settings", JSON.stringify(settings));

  //Trigger state change
  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
