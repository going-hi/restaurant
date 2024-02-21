import styles from "./Promotion.module.scss";
import stylesSection from "../about/About.module.scss";
import stylesButton from '../ui/button/Button.module.scss'
import stylesSpecially from '../specialty/Specialty.module.scss'
import { Line } from "../ui/line/Line";
import Arrow from '../../img/down-btn.svg'

export const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className="container">
        <div className={styles.promotion__inner}>
            <div className={stylesSpecially.specialty__category + " " + styles.promotion__category}>Promotion</div>
            <h1 className={stylesSection.section__headline + " " + styles.promotion__headline}>shipping discount</h1>
            <Line />
            <div className={stylesSection.section__text + " " + styles.promotion__text}>
              Integer ullamcorper neque eu purus euismod, ac faucibus mauris
              posuere. Morbi non ultrices ligula. Sed dictum, enim sed
              ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
              quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
              Nulla facilisis semper laoreet.
            </div>

            <a href="#fds" className={stylesButton.btn + " " + stylesButton.btn__promotion}>Go to menu</a>

            <div className={stylesSpecially.specialty__cyrcles + " " + styles.promotion__cyrcles}>
                <div className={stylesSpecially.specialty__cyrcle + " " + stylesSpecially.active}></div>
                <div className={stylesSpecially.specialty__cyrcle}></div>
                <div className={stylesSpecially.specialty__cyrcle}></div>
            </div>

            <button className={stylesButton.btn + " " + stylesButton.btn__promotion__arrow__left}>
                <img src={Arrow} alt="alr" />
            </button>

            <button className={stylesButton.btn + " " + stylesButton.btn__promotion__arrow__right}>
                <img src={Arrow} alt="alr" />
            </button>
        </div>
      </div>
    </section>
  );
};
