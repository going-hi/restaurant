import styles from './Footer.module.scss'
import facebook from '../../img/facebook.svg'
import inst from '../../img/inst.svg'
import twitter from '../../img/twitter.svg'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__text}>+7 (991) 219 90 90</div>
                <div className={styles.footer__text}>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</div>
                

                <div className={styles.footer__icons}>
                    <a href="#f" className={styles.footer__icon}>
                        <img src={facebook} alt="f"/>
                    </a>

                    <a href="#f" className={styles.footer__icon}>
                        <img src={twitter} alt="f"/>
                    </a>

                    <a href="#f" className={styles.footer__icon}>
                        <img src={inst} alt="f"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}