//Componente Dumb

import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css';

//tengo id para un link al detalle

const Card = ({props}) => {

return (
    <div className={style.cardcontainer}>

        <div className={style.imgcontainer}>
            <Link to={props.id} > 
                <img src={props.flag} alt="" />
            </Link>
        </div> 

        <div className={style.country}>
            <label>Country:</label>
            <span>{props.name}</span>
        </div> 

        <div className={style.continent}>
            <label>Continent:</label>
            <span>{props.continent}</span>
        </div> 

    </div>
    )
}

export default Card;