import '../assets/styles/mostrar.css'
import { useState, useEffect } from "react";
import Card from './Card';

function Mostrar() {

    const [data, setData] = useState({});

    useEffect(function(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(response=>response.json())
        .then(data=> setData(data))
        .catch(err=>console.log(err))
    },[])

    return data.results == undefined ? console.log("loading...") : ( 
        <div className='caja'>
            <div className='info'>
                {
                    data.results.map (character => (
                        <Card
                            key={character.id}
                            name={character.name}
                            image={character.image}
                        />
                    ))
                }
            </div>
        </div>
     );
}

export default Mostrar;