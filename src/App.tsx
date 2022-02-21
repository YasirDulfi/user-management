import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./appStyles.css";
import { Provider } from "react-redux";
import store from "store";
import MainContainer from "container/MainContainer";
import LoginContainer from "container/LoginContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
