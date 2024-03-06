import styles from "./Nav.module.scss"
import Logo from '../../img/logo.svg'

export const Nav = () => {
    return (
            <nav className={styles.nav} >
                <div className={styles.nav__group}>
                    <a href="/" className={styles.nav__item}>home</a>
                    <a href="/contact" className={styles.nav__item}>contact</a>
                    <a href="/menu" className={styles.nav__item}>menu</a>
                    <a href="/reviews" className={styles.nav__item}>reviews</a>
                </div>

                <a href="#a" className={styles.nav__logo}>
                    <img src={Logo} alt="logo"/>
                </a>
                
                <div className={styles.nav__group}>
                    
                    <a href="/galerie" className={styles.nav__item}>galerie</a>
                    <a href="/booking" className={styles.nav__item}>booking</a>
                    <a href="/cart" className={styles.nav__item}>cart</a>
                    <a href="/profile" className={styles.nav__item}>profile</a>
                </div>
            </nav>
    )
}