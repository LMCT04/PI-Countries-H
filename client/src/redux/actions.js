import { GET_COUNTRIES, GET_DETAIL, FILTER_BY_NAME, FILTER_INPUT_CONTINENT, ORDER_INPUT_COUNTRIES, ORDER_INPUT_POPULATION, GET_ACTIVITIES, FILTER_INPUT_ACTIVITY, CREATE_ACTIVITY } from './ActionTypes';
import axios from 'axios';

export const getCountries = () => {
    return async function(dispatch){
        try{
            const apiData = axios.get('http://localhost:3001/countries')
            const allCountries = apiData.data;
            dispatch({type: GET_COUNTRIES, payload: allCountries})
        } catch(error){
            console.log(error)
        }
    }
}

export const getCountryDetail = (id) => {
    return async function(dispatch){
        try{
            const apiData = axios.get(`http://localhost:3001/countries/${id}`)
            const country = apiData.data;
            dispatch({type: GET_DETAIL, payload: country})
        } catch(error){
            console.log(error)
        }
    }
}

export const filterByName = (nameCountry) => {
    return async function(dispatch){
        try{
            const apiData = axios.get(`http://localhost:3001/countries?name=${nameCountry}`)
            const name = (await apiData).data
            return dispatch({type: FILTER_BY_NAME, payload: name})
        } catch(error){
            console.log(error)
        }
    }
}


export const orderInputCountries = (orderCountries) => {
    return {type: ORDER_INPUT_COUNTRIES, payload:orderCountries}
};

export const orderInputPopulation = (orderPopulation) => {
    return {type: ORDER_INPUT_POPULATION, payload: orderPopulation}
};

export const filterInputContinent = (filterContinent) => {
    return {type: FILTER_INPUT_CONTINENT, payload: filterContinent}
};

export const filterInputActivity = (filterActivity) => {
    return {type: FILTER_INPUT_ACTIVITY, payload: filterActivity}
   };

//Traer todas las activities
export const getActivities = () => {
    return async function(dispatch) {
          try {
              const apiData = await axios.get("http://localhost:3001/activities");
              const allActivities = apiData.data;

        dispatch({type:GET_ACTIVITIES, payload : allActivities});
    } catch (error) {
        console.log(error);
    }
}

};

export function postActivity(payload) {
    return async function (dispatch) {
        try {
            const apiData = await axios.post("http://localhost:3001/activities", payload);
            const newActivity = apiData.data;

            dispatch({type:CREATE_ACTIVITY, payload : newActivity});
        } catch (error) {
            console.log(error)
        }
    }
}