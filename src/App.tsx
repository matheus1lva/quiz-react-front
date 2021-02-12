import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./components/GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default hot(module)(App);
