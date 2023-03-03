import Countries from '../../components/countries/countries'
import style from './Home.module.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch])


    return(
        <>
            <div className={style.contHome}></div>
        
            <div className={style.content}>

                <Countries />
                
            </div>
        </>
    )
}

export default Home;