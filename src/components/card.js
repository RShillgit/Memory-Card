const Card = (props) => {
    const handleCardClick = (e) => {

        // Send it to App's cardClick function with the unique id for that card
        props.cardClick(props.identifier);
    }

    return (
        <div className="card" onClick={handleCardClick}>
            <img alt="card"></img>
            <p>{props.text}</p>
        </div>
    )
}
export default Card;