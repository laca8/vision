import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginRed, registerRed } from "./reducer/authReduser";
import {
  addPlayerUserRed,
  getPlayerUserRed,
  listPlayersRed,
  PlayerByIdRed,
  updatePlayerRed,
} from "./reducer/player";
const middleware = [thunk];
const finalReducer = combineReducers({
  loginRed: loginRed,
  registerRed: registerRed,
  addPlayerUserRed: addPlayerUserRed,
  getPlayerUserRed: getPlayerUserRed,
  listPlayersRed: listPlayersRed,
  PlayerByIdRed: PlayerByIdRed,
  updatePlayerRed: updatePlayerRed,
});
const userData = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  loginRed: { userInfo: userData },
};
const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
