import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
constructor() {
    super();

    this.state = {
        users: [],
        searchField: ''
    };
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>
            response.json()
                .then((users) => this.setState(() => {
                    return { users: users}
                },
                ))
        );
}

onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
        return {searchField};
    });
};

    render() {
        const { users, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredUsers = this.state.users.filter((user) => {
            return user.name.toLocaleLowerCase().includes(searchField)
        });

    return (
        <div className="App">
            <h1 className="app-title">Kid Cat</h1>
            <SearchBox onChangeHandler={onSearchChange}
                       placeholder='Search Cats'
                       className='search-box'
            />
            <CardList users={filteredUsers}/>
        </div>
    );
  }
}

export default App;
