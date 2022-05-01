import { combineReducers } from "redux";

import generalUiState from "./ui/generalUiState";
import moviesPageUiState from "./ui/moviesPageUiState";
import moviesRequestsState from "./ui/moviesRequestsState";

export default combineReducers({
  generalUiState,
  moviesPageUiState,
  moviesRequestsState,
});
