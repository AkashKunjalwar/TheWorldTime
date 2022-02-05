import { combineReducers, createStore } from "redux";
import CalculateDateReducer from "./CalculateDateReducer";
import CalculateTimeReducer from "./CalculateTimeReducer";
import SendOutputReducer from "./SendOutputReducer";
import GetIDReducer from "./GetIDReducer";

const Reducer = combineReducers({
  SendOutputReducer,
  CalculateDateReducer,
  CalculateTimeReducer,
  GetIDReducer,
});

const store = createStore(Reducer);

export default store;
