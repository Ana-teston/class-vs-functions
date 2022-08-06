import { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
    super();

    this.state = {
        users: [
            { name: 'Joana',
              id: '1'
            },
            { name: 'Ana',
              id: '2'  },
            { name: 'John',
              id: '3'  },
            { name: 'Roby',
              id: '4'  },
        ],
    }
}

  render() {
    return (
        <div className="App">
            { this.state.users.map((user) => {
                return <div key={user.id}>
                    <h1>{user.name}</h1>
                </div>;
            })}
        </div>
    );
  }
}

export default App;
