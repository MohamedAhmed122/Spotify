import {
    combineReducers
} from 'redux';

import authReducer from './Auth/AuthReducer'

const rootReducer = combineReducers({
      auth: authReducer
})
// export default persistReducer(persistConfig, rootReducer);

export default  rootReducer













// // import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   whiteList: ["auth"],
// };