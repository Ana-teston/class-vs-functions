import Card from "../card/card.component";
import { User } from "../../App";
import './card-list.styles.css';

type CardListProps = {
    users: User[];
};


const CardList = ({users}: CardListProps) => (
    <div className='card-list'>
        {users.map((user) => {
            return <Card user={user}/>
        })}
    </div>
)

export default CardList;