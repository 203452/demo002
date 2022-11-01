import '../assets/styles/card.css'

function Card({name, image}) {
    return ( 
        <div className="caja">
            <div className="character">
            <div className="item">
                <img src={image} alt={name} />
                <span>{name}</span>
            </div>
        </div>
        </div>
     );
}

export default Card;