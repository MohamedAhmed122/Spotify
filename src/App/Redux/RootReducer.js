import {
    combineReducers
} from 'redux';

import authReducer from './Auth/AuthReducer'
import PlayReducer from './Play/PlayReducer';

const rootReducer = combineReducers({
      auth: authReducer,
      play: PlayReducer,
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