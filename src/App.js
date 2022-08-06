import { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
    super();

    this.state = {
        name: 'Ana Paula'
    }
}

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Hello i'm {this.state.name}!
            </p>
            <button>Change Name</button>
          </header>
        </div>
    );
  }
}

export default App;
