import { type } from "os";
import { createStore, combineReducers } from "redux";

import { ProductReducer } from "./product/ProductReducer";

export const rootReducer = combineReducers({ ProductReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
