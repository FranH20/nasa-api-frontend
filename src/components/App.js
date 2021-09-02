import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './Layout';
import Home from '../pages/Home';
import Notice from '../pages/Notice';
import Photos from '../pages/Photos';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/notice" component={Notice}/>
          <Route exact path="/photos" component={Photos} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
