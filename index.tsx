import React, { Component } from 'react';
import { render } from 'react-dom';
import { CustomInput } from './custom-input';
import Hello from './Hello';
import { SearchType } from './SearchType';
import './style.css';
interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {


  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <SearchType/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
