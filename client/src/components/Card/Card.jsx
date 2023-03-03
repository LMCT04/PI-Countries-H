import style from './Card.module.css'

const Card = (props) => {
    return(
        <div className={style.card} >
            <img className={style.card} src={props.flag} ></img>
            <p> Name: {props.name} </p>
            <p> capital: {props.capital} </p>
        </div>
    )
}

export default Card;