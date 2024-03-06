import specialtyStyles from '../specialty/Specialty.module.scss'
import sectionStyles from '../section/Section.module.scss'
import photo from '../../img/Rectanglef.png'
import style from './OurTeam.module.scss'
import { Line } from '../ui/line/Line'

export const OurTeam = () => {
    return (
        <section className={specialtyStyles.specialty + " "  + style.ourTeam}>

            <div className="container">

                <div className={sectionStyles.section__inner + " " + specialtyStyles.specialty__inner}>

                    <div className={specialtyStyles.specialty__category}>our team</div>


                    <div className={sectionStyles.section__content__image + " " + specialtyStyles.specialty__content__image}>
                        <img src={photo} alt="fdsf" />
                        <div className={sectionStyles.section__content__image__border + " " + specialtyStyles.specialty__content__image__border}></div>
                    </div>

                    <div className={sectionStyles.section__content}>
                        <h2 className={sectionStyles.section__headline + " " + specialtyStyles.specialty__headline}>MASTER CHEF</h2>
                        
                        <Line/>
                        <div className={sectionStyles.section__description + " " + specialtyStyles.specialty__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Duis at velit maximus, molestie est a, tempor magna.
                        </div>
                        <div className={sectionStyles.section__text + " " + specialtyStyles.specialty__text}>
                            Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. 
                            Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. 
                            Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}