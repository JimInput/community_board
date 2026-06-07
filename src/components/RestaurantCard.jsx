import "./RestaurantCard.css"

const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card">
            <img src={props.img} alt={props.name} />
            <div className="restaurant-card__content">
                <h2>{props.name}</h2>
                <h3>{props.type}</h3>
                <a href={props.url}>
                    <div className="view-button">
                        <p>View Site</p>
                    </div>
                </a>
            </div>
        </div>
        
    )
}

export default RestaurantCard