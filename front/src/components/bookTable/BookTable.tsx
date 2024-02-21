import styles from "../about/About.module.scss"
import Photo from '../../img/png/about-img.png'
import stylesButton from '../ui/button/Button.module.scss'
import { Line } from "../ui/line/Line"

export const BookTable = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                
                <div className={styles.section__inner}>

                    <div className={styles.section__content}>
                        <h1 className={styles.section__headline}>book a table</h1>
                        <Line/>
                        <div className={styles.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                        </div>
                        <div className={styles.section__text}>
                            Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum,
                            enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. 
                            Nulla facilisis semper laoreet.
                        </div>
                        <a href="#t" className={stylesButton.btn + " " + stylesButton.btn__table}>book now</a>
                    </div>

                    <div className={styles.section__content__image}>
                        <img src={Photo} alt="dsl" />
                        <div className={styles.section__content__image__border}></div>
                    </div>

                </div>  

            </div>
        </section>
    )
}