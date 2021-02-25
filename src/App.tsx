import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Questions } from "./routes/Questions";
import { Scores } from "./routes/Scores";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./components/GlobalStyles";
import store from "./store";
import { Provider } from "react-redux";
import { QUIZ_PATH, SCORE_PATH } from "./constants";
import { Provider as ReakitProvider } from "reakit";
import * as system from "reakit-system-bootstrap";
import { Home } from "./routes/Home";

const App = () => {
  return (
    <ReakitProvider unstable_system={system}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <Layout>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={QUIZ_PATH} component={Questions} />
              <Route exact path={SCORE_PATH} component={Scores} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    </ReakitProvider>
  );
};

export default hot(module)(App);
