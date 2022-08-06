import { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
    super();

    this.state = {
        name: { firstName: 'Ana Paula', lastName: 'Teston' },
        company: 'Zero To Mastery'
    }
}

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Hello i'm {this.state.name.firstName} {this.state.name.lastName}, I study at { this.state.company}!
            </p>
            <button onClick={() => {
                this.setState(() => {
                    return{
                        name: { firstName: 'Ana', lastName: 'Test' },
                    }
                }, () => {
                    console.log(this.state);
                })
            }}>Change Name</button>
          </header>
        </div>
    );
  }
}

export default App;
