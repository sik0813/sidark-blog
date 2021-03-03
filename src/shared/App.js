import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Home, License, About, Post } from '../pages';
import Menu from '../components/Menu';
import queryString from 'query-string';
import { firebaseSet } from '../shared/firebase.js'

class App extends Component {
  constructor(props, match) {
    super(props, match);
    const query = queryString.parse(match.search);
    firebaseSet();
    console.log(query);
  }

  render() {
    return (
      <div>
        <nav>
          <Menu />
        </nav>
        <div className="container-fluid pt-5">
        <Route exact path="/" component={ Home }/>
        <Route exact path="/About" component={ About } />
        <Route exact path="/Post" component={ Post } />
        <Route exact path="/License" component={ License } />
        </div>
      </div>
    );
  }
}

export default App; 