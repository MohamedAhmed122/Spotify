import {
    combineReducers
} from 'redux';

import authReducer from './Auth/AuthReducer'
import PlayReducer from './Play/PlayReducer';
import DiscoverReducer from './Discover/DiscoverReducer'

const rootReducer = combineReducers({
      auth: authReducer,
      play: PlayReducer,
      discover: DiscoverReducer
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