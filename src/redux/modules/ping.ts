import {ActionsObservable,  ofType } from "redux-observable";
import { mapTo, tap, delay, switchMap } from "rxjs/operators";
import { timer } from "rxjs";

export const PING = "PING";
export const PONG = "PONG";

export const ping = () => ({ type: PING });
export const pong = () => ({ type: PONG });

export interface type {
     type: string;
}



export const pingEpic = (action$ : ActionsObservable<type>)  =>
  action$.pipe(
    ofType(PING),
    switchMap(() => timer(1000)),
    mapTo(pong()),
    tap(console.info)
  );

export const pongEpic = (action$ : ActionsObservable<type>) =>
  action$.pipe(
    ofType(PONG),
    delay(1000),
    mapTo(ping()),
    tap(console.info)
  );

export default function pingReducer(state = { isPinging: false }, action: type) {
  switch (action.type) {
    case "PING":
      return { isPinging: true };
    case "PONG":
      return { isPinging: false };
    default:
      return state;
  }
}
