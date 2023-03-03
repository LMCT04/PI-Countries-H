import { useSelector, useDispatch } from "react-redux";
import { filterInputContinent, orderInputCountries, orderInputPopulation } from "../../redux/actions";



const Filters = () => {

    const dispatch = useDispatch();

    const orderCountriesInput = useSelector((state)=> state.orderCountriesInput);
    const populationInput = useSelector((state)=> state.populationInput);
    const continentInput = useSelector((state)=> state.continentInput);
    const activityInput = useSelector((state)=> state.activityInput);
    const activities = useSelector((state)=> state.activities);
    

    const handleInputChange = (event) => {
        if(event.target.name === "countries")dispatch(orderInputCountries(event.target.value));
        if(event.target.name === "population") dispatch(orderInputPopulation(event.target.value));
        if(event.target.name === "continent") dispatch(filterInputContinent(event.target.value));
        if(event.target.name === "activities") dispatch(filterInputContinent(event.target.value));
    };

    
    
    return (
    <div>

        <select name="countries" value={orderCountriesInput} onChange={handleInputChange}>
            <option value=''>Order by...</option>
            <option value='asc'>A-Z</option>
            <option value='des'>Z-A</option>
        </select>

        <select name="population" value={populationInput} onChange={handleInputChange}>
            <option value=''>Order by...</option>
            <option value='asc'>More population</option>
            <option value='des'>Less population</option>
        </select>
        
        <select name="continent" value={continentInput} onChange={handleInputChange} >
            <option value='all'>All continents</option>
            <option value='Africa'>Africa</option>
            <option value='Antarctica'>Antarctica</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='North America'>North America</option>
            <option value='Oceania'>Oceania</option>
            <option value='South America'>South America</option>
        </select>

        <select name="activities"  value={activityInput} onChange={handleInputChange} multiple={false} > 
            {activities.map((act) => (
            <option value={act.name}>{act.name}</option>
            ))}
        </select>

    </div>
    

    )
}

export default Filters;