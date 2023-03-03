import Card from "../Card/Card";
import style from './CardsContainer.module.css';



const CardsContainer = (props) => {

    return(
        <div className = {style.container} >
            {props.countries?.map((country) => {
                return <Card 
                    id = {country.id}
                    name = {country.name}
                    flag= {country.flag}
                    continent = {country.continent}
                    capital = {country.capital}
                    subregion = {country.subregion}
                    area = {country.area}
                    population = {country.population}
                    activities = {country.activities}
                />
            })}
        </div>
    )
}

export default CardsContainer;