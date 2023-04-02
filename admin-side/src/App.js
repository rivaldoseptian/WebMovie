import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";

import { Provider } from "react-redux";
import store from "./store";

// import CustomNavbar from "./component/CustomNavbar";
// import TableList from "./component/table";
// import CreateMovie from "./component/creatMovie";
// import LoginForm from "./component/loginForm";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
