import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import HistoryProvider from "./context/HistoryProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HistoryProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryProvider>
  </BrowserRouter>
);
