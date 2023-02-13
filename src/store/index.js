import { combineReducers, createStore } from "redux";
import AuthReducer from "./auth/AuthReducer";
import { calculatorReducer } from "./calculator/calculatorReducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  auth: AuthReducer,
});

export const store = createStore(rootReducer);
