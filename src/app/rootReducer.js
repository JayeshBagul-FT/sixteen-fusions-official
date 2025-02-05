import { combineReducers } from "redux";
import userSlice from "../features/userSlice";
const rootReducer = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
//   userSlice,
});

export default rootReducer;
