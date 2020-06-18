import React from 'react';

import landing from './components/landing/landing';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={landing} />
        <Route path="/connect" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
    </Router>
  );
}

export default App;
