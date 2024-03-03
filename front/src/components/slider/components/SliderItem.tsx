import styles from "../../promotion/Promotion.module.scss";
import stylesSection from '../../section/Section.module.scss'
import stylesButton from '../../ui/button/Button.module.scss'
import stylesSpecially from '../../specialty/Specialty.module.scss'
import { Line } from "../../ui/line/Line";

export const SliderItem = (props: any) => {
    return  (
        <article className={styles.promotion  + " " + styles[props.position]} style={{backgroundImage: `url(${props.photo})`}} key={props.id}>
        <div className="container">
          <div className={styles.promotion__inner}>
              <div className={stylesSpecially.specialty__category + " " + styles.promotion__category}>Promotion</div>
              <h1 className={stylesSection.section__headline + " " + styles.promotion__headline}>{props.title}</h1>
              <Line />
              <div className={stylesSection.section__text + " " + styles.promotion__text}>
                {props.text}
              </div>

              <a href="#fds" className={stylesButton.btn + " " + stylesButton.btn__promotion}>{props.btnText}</a>
          </div>
        </div>
      </article>

    )
}