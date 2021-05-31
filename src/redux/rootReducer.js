import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import charactersReducer from "./characters/characters.reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["character"],
};

const rootReducer = combineReducers({
  character: charactersReducer,
});

export default persistReducer(persistConfig, rootReducer);
