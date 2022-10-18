function Card({name, image}) {
    return ( 
        <div className="caja_info-character">
            <img src={image} alt={name} />
            <span>{name}</span>
        </div>
     );
}

export default Card;