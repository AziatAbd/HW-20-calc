import { combineReducers, createStore } from "redux";
import { authSlice } from "./auth/authSlice";
import { calculatorSlice } from "./calculator/calculatorSlice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [calculatorSlice.name]: calculatorSlice.reducer,
});

export const store = createStore(rootReducer);
