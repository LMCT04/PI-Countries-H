import { Link } from 'react-router-dom';
import style from './Landing.module.css';
import landing from '../../ImgAssets/landing.jpg'

const Landing = () => {
    return(
        <div className={style.container} >
            <h1 className={style.h1}> Explore countries with our API </h1>

        <img src={landing} className={style.img} width='68%'  ></img>

            <div >
                <Link to='/home'>
                    <button className={style.button} >
                        <span >START EXPLORE</span>
                    </button>
                </Link>
            </div>

            <p className={style.p}> Enter and immerse yourself in the countries of our planet, Earth </p>
        </div>
    )
}

export default Landing;