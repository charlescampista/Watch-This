import actionTypes from "../actionTypes";

export function setLanguage(language) {
  return {
    type: actionTypes.SET_LANGUAGE,
    payload: language,
  };
}
