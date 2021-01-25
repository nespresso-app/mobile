import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import RootNavigator from "./navigation";
import store from "./store";

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </>
  );
};

export default App;
