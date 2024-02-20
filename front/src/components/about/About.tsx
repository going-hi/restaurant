import styles from "./About.module.scss"
import Photo from '../../img/about-img.png'
import { Line } from "../ui/line/Line"

export const About = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                
                <div className={styles.section__inner}>

                    <div className={styles.section__content}>
                        <h1 className={styles.section__headline}>about as</h1>
                        <Line/>
                        <div className={styles.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                        </div>
                        <div className={styles.section__text}>
                            Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum,
                            enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. 
                            Nulla facilisis semper laoreet.
                        </div>
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