import React, { Component } from 'react';
import { P, CP } from './components/demos';

class App extends Component {
  render() {
    return (
      <div className="App">
          <P>
              <CP key="app-cp"/>
          </P>
      </div>
    );
  }
}

export default App;
