import styles from "./Nav.module.css"
import Logo from '../../img/logo.svg'

export const Nav = () => {
    return (
            <nav className={styles.nav}>
                <div className={styles.nav__group}>
                    <a href="#f" className={styles.nav__item}>home</a>
                    <a href="#f" className={styles.nav__item}>about</a>
                    <a href="#f" className={styles.nav__item}>team</a>
                    <a href="#f" className={styles.nav__item}>booking</a>
                </div>

                <a href="#a" className={styles.nav__logo}>
                    <img src={Logo} alt="logo"/>
                </a>
                
                <div className={styles.nav__group}>
                    <a href="#f" className={styles.nav__item}>menu</a>
                    <a href="#f" className={styles.nav__item}>galerie</a>
                    <a href="#f" className={styles.nav__item}>events</a>
                    <a href="#f" className={styles.nav__item}>contact</a>
                </div>
            </nav>
    )
}