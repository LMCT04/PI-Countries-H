import { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterByName } from '../../redux/actions';
import styles from './SearchBar.module.css'


export default function SearchBar() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()


    function handleSubmit (){
        setName(name)
        dispatch(filterByName(name))
    }

    return(
        <div className={styles.container} >
            <input  placeholder="Search Country Here..." 
                    onChange={(event)=>(event.target.value)}  />
            <button onClick={handleSubmit} >SEARCH</button>
        </div>
    )

}