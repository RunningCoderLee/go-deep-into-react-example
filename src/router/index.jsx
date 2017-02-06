import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from 'Components/layout/App';
import ChapterOne from 'Components/chapter1';
import ChapterTwo from 'Components/chapter2';
import ChapterThree from 'Components/chapter3';
import ChapterFour from 'Components/chapter4';
import ChapterFive from 'Components/chapter5';
import ChapterSix from 'Components/chapter6';
import ChapterSeven from 'Components/chapter7';
import ChapterEight from 'Components/chapter8';
import Home from 'Components/Home';


const routes = (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/codes" component={App}>
        <Route path="/chapter-one" component={ChapterOne} />
        <Route path="/chapter-two" component={ChapterTwo} />
        <Route path="/chapter-three" component={ChapterThree} />
        <Route path="/chapter-four" component={ChapterFour} />
        <Route path="/chapter-five" component={ChapterFive} />
        <Route path="/chapter-six" component={ChapterSix} />
        <Route path="/chapter-seven" component={ChapterSeven} />
        <Route path="/chapter-eight" component={ChapterEight} />
      </Route>
    </Route>
  </Router>
);

export default routes;
