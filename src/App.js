import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setUsers(users));
    }, []);

    useEffect(() => {
        const newFilterUsers = users.filter((user) => {
            return user.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterUsers(newFilterUsers);
    }, [users, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleString();
        setSearchField(searchFieldString);
    }

    return (
        <div className="App">
            <h1 className="app-title">Kid Cat</h1>
            <SearchBox onChangeHandler={onSearchChange}
                       placeholder='Search Cats'
                       className='search-box'
            />
            <CardList users={filterUsers}/>
        </div>
    );
}

export default App;
