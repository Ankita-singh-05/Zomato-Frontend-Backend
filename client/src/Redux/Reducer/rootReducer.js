import { combineReducers } from "redux";

import Restaurant from "./Restaurant/restaurant.reducer";

const rootReducer = combineReducers ({Restaurant});

export default rootReducer;