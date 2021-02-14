import React, { VFC, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Prism from "prismjs";
import {
  MathOperations,
  ReactChildren,
  ReactReturnType,
  CompareArguments,
  RangeNumbers,
  Tuples,
  UnionArray,
  Callbacks,
  PubSub,
  TypeState,
  Api,
  Unions,
  TemplateLiterals,
  CallbackChain,
  FlattenUnion,
} from "./Chapters";
import { About, Contact, Home } from "./Sections";
import { blogArticles, sections } from "./Layout/structure";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import { Main } from "./Layout";
import ArticleBase from "./Shared/ArticleBase";

export const componentMap = {
  MathOperations,
  ReactChildren,
  ReactReturnType,
  CompareArguments,
  RangeNumbers,
  Tuples,
  UnionArray,
  Callbacks,
  PubSub,
  TypeState,
  Api,
  About,
  Contact,
  Home,
  Unions,
  TemplateLiterals,
  CallbackChain,
  FlattenUnion,
};

setTimeout(() => Prism.highlightAll(), 0);

const ScrollToTop = withRouter(({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
});

const toUnix = (date: string) => new Date(date).getTime();

const data = blogArticles
  .sort((prev, next) => toUnix(prev.date) - toUnix(next.date))
  .reverse()
  .concat(sections);

fetch("http://api.catchts.com/hey").then((response) =>
  response.json().then((data) => console.log({ data }))
);
const App: VFC = () => (
  <Router>
    <Main>
      <ScrollToTop />
      <Switch>
        {data.map((elem) => {
          const { url, Comp } = elem;
          const Component = componentMap[Comp as keyof typeof componentMap];

          return (
            <Route path={url} key={url}>
              <ArticleBase path={url} {...elem}>
                <Component />
              </ArticleBase>
            </Route>
          );
        })}
      </Switch>
    </Main>
  </Router>
);

export default App;
