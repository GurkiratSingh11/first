import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import drawerReducer from "./drawerSlice";

const rootReducer = combineReducers({
    cart: cartReducer,
    drawer: drawerReducer
  });
  
const store = configureStore({
    reducer: rootReducer,
  });

export default store;