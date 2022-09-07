import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';
import { getData } from "./utils/data.utils";

export type User = {
    id: string;
    name: string;
    email: string;
};

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [filterUsers, setFilterUsers] = useState(users);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<User[]>(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(users);
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        const newFilterUsers = users.filter((user) => {
            return user.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterUsers(newFilterUsers);
    }, [users, searchField]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
