import styles from "./Header.module.scss"
import { Nav } from "../nav/Nav"
import downArrow from '../../img/down-btn.svg'
import facebook from '../../img/facebook.svg'
import inst from '../../img/inst.svg'
import twitter from '../../img/twitter.svg'
import stylesButton from '../ui/button/Button.module.scss'
import { Line } from "../ui/line/Line"

export const Header = () => {
    return (
       <header className={styles.header}>
          <div className="container">
            <div className={styles.header__inner}>
            
            <Nav/>
            <div className={styles.intro}>
                <h2 className={styles.intro__headline__male}>restaurant</h2>
                <h1 className={styles.intro__headline__main}>hungry people</h1>
                <Line />
                <div className={styles.intro__btn__group}>
                    <a href ="#g" className={`${stylesButton.btn} ${stylesButton.btn__intro__yellow}`}>book table</a>
                    <a href ="#g"className={`${stylesButton.btn} ${stylesButton.btn__intro__proz}`}>explore</a>
                </div>
                <div>
                    <a href ="#g"className={`${stylesButton.btn__intro__arrow} ${stylesButton.btn}`}>
                        <img src={downArrow} alt="alt" />
                    </a>
                </div>
            </div>

           
            <div className={styles.intro__linear__vertical_right}></div>
            <div className={styles.intro__linear__vertical_left}></div>

            </div>
           </div>

           <div className={styles.intro__time}>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</div>
           <div className={styles.intro__icons__items}>
                <a href="#f" className={styles.intro__icons__item}>
                    <img src={facebook} alt="f"/>
                </a>

                <a href="#f" className={styles.intro__icons__item}>
                    <img src={twitter} alt="f"/>
                </a>

                <a href="#f" className={styles.intro__icons__item}>
                    <img src={inst} alt="f"/>
                </a>
           </div>
       </header>
    )
}