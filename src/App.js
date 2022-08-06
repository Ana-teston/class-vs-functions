import { Component } from "react";
import './App.css';

class App extends Component {
constructor() {
    super();

    this.state = {
        users: [],
    };
    console.log('1');
}

componentDidMount() {
    console.log('3');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>
            response.json()
                .then((users) => this.setState(() => {
                    return { users: users}
                },
                    () => {console.log(this.state)}
                ))
        );
}

    render() {
        console.log('2');
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
