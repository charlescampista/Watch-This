import { combineReducers } from "redux";

import generalUiState from "./ui/generalUiState";
import generalInformationState from "./information/generalInformationState";
import moviesPageUiState from "./ui/moviesPageUiState";
import moviesRequestsState from "./requests/moviesRequestsState";

export default combineReducers({
  generalUiState,
  generalInformationState,
  moviesPageUiState,
  moviesRequestsState,
});
