import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import ping, { pingEpic, pongEpic } from "./ping";

export const rootEpic = combineEpics(pingEpic, pongEpic);
export const rootReducer = combineReducers({ ping });


export type PingState = ReturnType<typeof rootReducer>;
