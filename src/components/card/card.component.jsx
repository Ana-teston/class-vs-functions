import './card.styles.css'

const Card = ({user}) => {
    const { id, name, email} = user;
    return(
        <div className='card-container' key={id}>
            <img alt={`user ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;