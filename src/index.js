import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@tremor/react/dist/esm/tremor.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
// import setupLocatorUI from "@locator/runtime";

// if (process.env.NODE_ENV === "development") {
//   setupLocatorUI();
// }

axios.defaults.baseURL = "http://localhost:3004";
axios.defaults.headers.common["authorization"] = `Bearer token`;
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </Provider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
