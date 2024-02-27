import specialtyStyles from '../specialty/Specialty.module.scss'
import sectionStyles from '../section/Section.module.scss'
import style from '../ourTeam/OurTeam.module.scss'
import { Line } from '../ui/line/Line'

export const SectionBackground = (props: any) => {
    return (
        <section className={specialtyStyles.specialty + " "  + style.ourTeam + " " + props.position}>

            <div className="container">

                <div className={sectionStyles.section__inner + " " + specialtyStyles.specialty__inner}>

                    <div className={specialtyStyles.specialty__category}>{props.category}</div>


                    <div className={sectionStyles.section__content__image + " " + specialtyStyles.specialty__content__image}>
                        <img src={props.photo} alt="fdsf" />
                        <div className={sectionStyles.section__content__image__border + " " + specialtyStyles.specialty__content__image__border}></div>
                    </div>

                    <div className={sectionStyles.section__content}>
                        <h2 className={sectionStyles.section__headline + " " + specialtyStyles.specialty__headline}>{props.title}</h2>
                        
                        <Line/>
                        <div className={sectionStyles.section__description + " " + specialtyStyles.specialty__description}>
                            {props.description}
                        </div>
                        <div className={sectionStyles.section__text + " " + specialtyStyles.specialty__text}>
                            {props.text}
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}