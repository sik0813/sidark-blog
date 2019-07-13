import React, { Component } from 'react';
import 'css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Home, License, About, Post } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/License" component={ License }/>
        <Route exact path="/About"component={ About } />
        <Route exact path="/Post" component={ Post } />
      </div>
    );
  }
}

export default App; 