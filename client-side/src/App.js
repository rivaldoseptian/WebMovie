// import "./app.css";
import React from "react";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
