import { Component } from "react";
import './App.css';

class App extends Component {
constructor() {
    super();

    this.state = {
        users: [],
        searchField: ''
    };
    console.log('constructor');
}

componentDidMount() {
    console.log('componentDidMount');
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
        const filteredUsers = this.state.users.filter((user) => {
            return user.name.toLocaleLowerCase().includes(this.state.searchField)
        });

    return (
        <div className="App">
            <input className='search-box'
                   type='search'
                   placeholder='Search Users'
                   onChange={(event) => {
                       const searchField = event.target.value.toLocaleLowerCase();
                       this.setState(() => {
                               return { searchField };
                           });
                       }}
            />
            { filteredUsers.map((user) => {
                return <div key={user.id}>
                    <h1>{user.name}</h1>
                </div>;
            })}
        </div>
    );
  }
}

export default App;
