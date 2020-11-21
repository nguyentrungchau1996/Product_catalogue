/*global chrome*/

// Libraries
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { v4 as uuidv4 } from "uuid";

// Reducers
import rootReducer from "./Redux/Reducer";

// Assets
import { PAGE_LAZADA, PAGE_TIKI, PAGE_SHOPEE } from "./constants";

window.addEventListener("load", () => {
  chrome.tabs.executeScript(
    null,
    {
      file: "content.js"
    },
    () => {
      connect();
    }
  );
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

const checkPage = url => {
  const pages = [PAGE_SHOPEE, PAGE_TIKI, PAGE_LAZADA];
  let result = "";

  if (url && typeof url === "string") {
    for (let i = 0; i < pages.length; i++) {
      let index = url.indexOf(pages[i]);

      if (index !== -1) {
        return (result = pages[i]);
      }
    }
  }

  return result;
};

const postMessagePromise = (port, message) => {
  const uuid = uuidv4();
  let resolved = false;

  console.log("Co vao day ko?");

  const handler = (response, resolve) => {
    if (response.messageId === uuid) {
      resolved = true;
      resolve(response);
    }
  };

  return new Promise((resolve, reject) => {
    port.postMessage({
      ...message,
      messageId: uuid || ""
    });

    port.onMessage.addListener(response => handler(response, resolve));

    setTimeout(() => {
      if (!resolved) {
        port.onMessage.removeListener(response => handler(response, resolve));
        reject("Message Timeout!");
      }
    }, 3000);
  });
};

const connect = () => {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    console.log("tabs[0]", tabs[0]);

    if (tabs && tabs.length && tabs[0].url) {
      let result = checkPage(tabs[0].url);
      const port = chrome.tabs.connect(tabs[0].id);
      const message = { message: result, url: tabs[0].url };

      postMessagePromise(port, message)
        .then(res => {
          if (res) {
            ReactDOM.render(
              <Provider store={store}>
                <App res={res} />
              </Provider>,
              document.getElementById("root")
            );
          }
        })
        .catch(console.log);
    }
  });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
