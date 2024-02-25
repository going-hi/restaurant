import { Line } from '../ui/line/Line'
import styles from './Menu.module.scss'
import stylesSection from '../section/Section.module.scss'
import stylesButton from '../ui/button/Button.module.scss'
import { DishCards } from '../ui/menu/DishCard/DishCards'
import { Categories } from '../ui/menu/categories/Categories'
import { Container } from '../ui/container/Container'

export const Menu = () => {
    return (
        <section className={styles.menu}>
            <Container>
                <div className={styles.menu__inner}>
                        <h1 className={stylesSection.section__headline}>DELICIOUS MENU</h1>
                            <Line/>
                        <div className={stylesSection.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Duis at velit maximus, molestie est a, tempor magna.
                             Duis at velit maximus, molestie est a, tempor agna.
                        </div>

                        <Categories/>
                        <DishCards/>

                        <a href='#f' className={stylesButton.btn + " " + stylesButton.btn__menu}>see more</a>
                </div>
            </Container>
        </section>
    )
}