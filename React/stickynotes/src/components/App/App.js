import React, { Component } from 'react';

import { Board } from 'components';
import { dependencies, devDependencies } from '../../../package.json';

const deps = Object.assign({}, dependencies, devDependencies);

class App extends Component {
  

  render() {
    return (
      <div>
          <Board />
      </div>
    );
  }
}

export default App;
