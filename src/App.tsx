import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Questions } from "./routes/Questions";
import { Layout } from "./components/Layout";
import { GlobalStyles } from "./components/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route exact path="/" component={Questions} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default hot(module)(App);
