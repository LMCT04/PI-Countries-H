import { Link } from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return ( 
        <>
            <nav className={style.nav}>
        
                <ul className={style.contenedor}>
                    <Link className={style.link} to="/home">HOME | COUNTRIES</Link>

                    <Link className={style.link2} to="/create">Create Activities</Link>

                    <SearchBar/>
            
                </ul>
            
            </nav>
        </>
    )
}

export default NavBar;