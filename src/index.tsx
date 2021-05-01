import * as React from "react";
import { render } from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { PingState } from './redux/modules/root';
// import {RootState} from 'typesafe-actions';

import { ping } from "./redux/modules/ping";

import configureStore from "./redux/configureStore";

import "./styles.css";

function App() {

   console.log(useSelector(state => state))
  // const isPinging =   useSelector(state => state.ping.isPinging);
  const isPinging = useSelector((state: PingState) =>  state.ping.isPinging);

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.info(`isPinging`, isPinging);
  });

  return (
    <div style={{margin : '20rem'}}>
      <h2>isPinging? {isPinging.toString()}</h2>
      <button onClick={() => dispatch(ping())}>PING</button>
    </div>
  );
}

const store = configureStore();
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
