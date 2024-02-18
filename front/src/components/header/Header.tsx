import styles from "./Header.module.css"
import { Nav } from "../nav/Nav"
import downArrow from '../../img/down-btn.svg'

export const Header = () => {
    return (
       <header className={styles.header}>
          <div className="container">
            <div className={styles.header__inner}>

            <Nav/>
            <div className={styles.intro}>
                <h2 className={styles.intro__headline__male}>restaurant</h2>
                <h1 className={styles.intro__headline__main}>hungry people</h1>
                <div className={styles.intro__linear}></div>
                <a href ="#g" className={"btn " + styles.intro__button__yellow}>book table</a>
                <a href ="#g"className={"btn " + styles.intro__button__proz}>explore</a>
                <div>
                    <a href ="#g"className={"btn " + styles.intro__button__arrow}>
                        <img src={downArrow} alt="alt" />
                    </a>
                </div>
            </div>

           
            <div className={styles.intro__linear__vertical_right}></div>
            <div className={styles.intro__linear__vertical_left}></div>

           
            </div>
           </div>

           <div className={styles.intro__time}>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</div>
       </header>
    )
}