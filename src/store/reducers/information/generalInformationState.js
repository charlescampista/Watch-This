import actionTypes from "../../actionTypes";

const INITIAL_STATE = {
  payload: "en-US",
};

export default function generalInformationState(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === actionTypes.SET_LANGUAGE) {
    return {
      ...state,
      payload: action.payload,
    };
  }

  return state;
}
