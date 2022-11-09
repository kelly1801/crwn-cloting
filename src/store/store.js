import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
const persistConfig = {
  key: 'root', // persist everything
storage,
  blacklist: ['user', ] // what we dont want to save
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);
const composeEnhacer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhacer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store)
