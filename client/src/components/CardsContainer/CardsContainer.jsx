import Card from "../Card/Card";
import style from './CardsContainer.module.css';

const countries = [
    {
      "id": "ATF",
      "name": "French Southern and Antarctic Lands",
      "flag": "https://flagcdn.com/w320/tf.png",
      "continent": "Antarctica",
      "capital": "Port-aux-Français",
      "subregion": "Subregion not found",
      "area": "7747",
      "population": 400,
      "activities": []
    },
    {
      "id": "COL",
      "name": "Colombia",
      "flag": "https://flagcdn.com/w320/co.png",
      "continent": "South America",
      "capital": "Bogotá",
      "subregion": "South America",
      "area": "1141748",
      "population": 50882884,
      "activities": []
    },
    {
      "id": "VEN",
      "name": "Venezuela",
      "flag": "https://flagcdn.com/w320/ve.png",
      "continent": "South America",
      "capital": "Caracas",
      "subregion": "South America",
      "area": "916445",
      "population": 28435943,
      "activities": []
    },
    {
      "id": "TJK",
      "name": "Tajikistan",
      "flag": "https://flagcdn.com/w320/tj.png",
      "continent": "Asia",
      "capital": "Dushanbe",
      "subregion": "Central Asia",
      "area": "143100",
      "population": 9537642,
      "activities": []
    },
    {
      "id": "IRQ",
      "name": "Iraq",
      "flag": "https://flagcdn.com/w320/iq.png",
      "continent": "Asia",
      "capital": "Baghdad",
      "subregion": "Western Asia",
      "area": "438317",
      "population": 40222503,
      "activities": []
    },
    {
      "id": "CIV",
      "name": "Ivory Coast",
      "flag": "https://flagcdn.com/w320/ci.png",
      "continent": "Africa",
      "capital": "Yamoussoukro",
      "subregion": "Western Africa",
      "area": "322463",
      "population": 26378275,
      "activities": []
    },
    {
      "id": "CHE",
      "name": "Switzerland",
      "flag": "https://flagcdn.com/w320/ch.png",
      "continent": "Europe",
      "capital": "Bern",
      "subregion": "Western Europe",
      "area": "41284",
      "population": 8654622,
      "activities": []
    },
    {
      "id": "BRA",
      "name": "Brazil",
      "flag": "https://flagcdn.com/w320/br.png",
      "continent": "South America",
      "capital": "Brasília",
      "subregion": "South America",
      "area": "8515767",
      "population": 212559409,
      "activities": []
    },
    {
      "id": "MUS",
      "name": "Mauritius",
      "flag": "https://flagcdn.com/w320/mu.png",
      "continent": "Africa",
      "capital": "Port Louis",
      "subregion": "Eastern Africa",
      "area": "2040",
      "population": 1265740,
      "activities": []
    }
]

const CardsContainer = () => {
    return(
        <div className = {style.container} >
            {countries.map(country => {
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