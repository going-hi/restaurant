import styles from './Specialty.module.scss'
import sectionStyles from '../../components/about/About.module.scss'
import photo from '../../img/Rectangle.png'
import { Line } from '../ui/line/Line'

export const Specialty = () => {
    return (
        <section className={styles.specialty}>

            <div className="container">

                <div className={sectionStyles.section__inner + " " + styles.specialty__inner}>

                    <div className={styles.specialty__category}>specialties</div>


                    <div className={sectionStyles.section__content__image + " " + styles.specialty__content__image}>
                        <img src={photo} alt="fdsf" />
                        <div className={sectionStyles.section__content__image__border + " " + styles.specialty__content__image__border}></div>
                    </div>

                    <div className={sectionStyles.section__content}>
                        <h2 className={sectionStyles.section__headline + " " + styles.specialty__headline}>chocolate pancakes</h2>
                        
                        <Line/>
                        <div className={sectionStyles.section__description + " " + styles.specialty__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Duis at velit maximus, molestie est a, tempor magna.
                        </div>
                        <div className={sectionStyles.section__text + " " + styles.specialty__text}>
                            Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. 
                            Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. 
                            Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                        </div>

                    </div>

                    <div className={styles.specialty__cyrcles}>
                        <div className={styles.specialty__cyrcle + " " + styles.active}></div>
                        <div className={styles.specialty__cyrcle}></div>
                        <div className={styles.specialty__cyrcle}></div>
                    </div>
                </div>

            </div>

        </section>
    )
}