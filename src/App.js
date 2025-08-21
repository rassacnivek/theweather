import React from "react";
import { Provider } from "react-redux";
import Header from "./layout/header";
import Home from "./pages/home";
import Sidebar from "./layout/sidebar";
import { store } from "./config/store";
import "./styles/fonts.css";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <Sidebar />
    </Provider>
  );
};

export default App;
