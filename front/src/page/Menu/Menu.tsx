import { Nav } from "../../components/nav/Nav"
import Background from '../../img/header-bg.png'
import { Container } from "../../components/ui/container/Container"
import styles from './Menu.module.scss'
import stylesSection from '../../components/section/Section.module.scss'
import stylesButton from '../../components/ui/button/Button.module.scss'
import { Line } from "../../components/ui/line/Line"
import { Categories } from "../../components/ui/menu/categories/Categories"
import { DishCards } from "../../components/ui/menu/DishCard/DishCards"

export const MenuPage = () => {
    
    const styleBackground = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <>
            <div style={styleBackground}>
                <div className="container">
                    <Nav/>
                </div>
            </div>
            <section className={styles.menu}>
            <Container>
                <div className={styles.menu__inner}>
                        <h2 className={stylesSection.section__headline}>DELICIOUS MENU</h2>
                            <Line/>
                        <div className={stylesSection.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Duis at velit maximus, molestie est a, tempor magna.
                             Duis at velit maximus, molestie est a, tempor agna.
                        </div>

                        <Categories/>
                        <h2 className={stylesSection.section__middleline}>all</h2>
                        <DishCards/>
                        <div className={styles.menu__block__btn}>
                            <button className={stylesButton.btn + " " + stylesButton.btn__menu__number}>1</button>
                            <button className={stylesButton.btn + " " + stylesButton.btn__menu__number}>2</button>
                            <button className={stylesButton.btn + " " + stylesButton.btn__menu__number}>3</button>
                            <button className={stylesButton.btn + " " + stylesButton.btn__menu__number}>4</button>
                        </div>
                </div>
            </Container>
        </section>
        </>

    )
}