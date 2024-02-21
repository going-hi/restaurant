import { Line } from '../ui/line/Line'
import styles from './Menu.module.scss'
import stylesSection from '../about/About.module.scss'
import Photo from '../../img/3db05a0964124b98a5f0d9688790664f.jpg'
import stylesButton from '../ui/button/Button.module.scss'
import Photo2 from '../../img/7a9882618c74fab18e7a5bf052f034bd.jpg'
import Photo3 from '../../img/f528859aba105567227946e356e11564.jpg'

export const Menu = () => {
    return (
        <section className={styles.menu}>
            <div className="container">
                <div className={styles.menu__inner}>
                        <h1 className={stylesSection.section__headline}>DELICIOUS MENU</h1>
                            <Line/>
                        <div className={stylesSection.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Duis at velit maximus, molestie est a, tempor magna.
                             Duis at velit maximus, molestie est a, tempor magna.
                        </div>

                        <div className={styles.menu__categories}>
                            <a href = "#fd"className={styles.menu__category}>soupe</a>
                            <a href = "#fd"className={styles.menu__category}>pizza</a>
                            <a href = "#fd"className={styles.menu__category}>pasta</a>
                            <a href = "#fd"className={styles.menu__category}>desert</a>
                            <a href = "#fd"className={styles.menu__category}>wine</a>
                            <a href = "#fd"className={styles.menu__category}>beer</a>
                            <a href = "#fd"className={styles.menu__category}>drinks</a>
                        </div>

                        <div className={styles.menu__items}>
                            <div className={styles.menu__item}>
                                <img src={Photo} alt="fd" className={styles.menu__item__image} />
                                <div className={styles.menu__item__category}>meet</div>
                                <div className={styles.menu__item__title}>Stake August</div>
                                <div className={styles.menu__item__description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis at velit maximus, molestie est a, tempor magna.
                                </div>
                                <div className={styles.menu__item__count}>
                                    <div className={styles.menu__item__price}>3 000 $</div>
                                    <div className={styles.menu__item__discount}>4 000 $</div>
                                </div>
                               
                                <a  href = "#f" className={stylesButton.btn + " " + stylesButton.btn__menu}>In Card</a>
                            </div>  
                            {/* item */}

                            <div className={styles.menu__item}>
                                <img src={Photo2} alt="fd" className={styles.menu__item__image} />
                                <div className={styles.menu__item__category}>meet</div>
                                <div className={styles.menu__item__title}>Stake August</div>
                                <div className={styles.menu__item__description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis at velit maximus, molestie est a, tempor magna.
                                </div>
                                <div className={styles.menu__item__count}>
                                    <div className={styles.menu__item__price}>3 000 $</div>
                                    <div className={styles.menu__item__discount}>4 000 $</div>
                                </div>
                               
                                <a  href = "#f" className={stylesButton.btn + " " + stylesButton.btn__menu}>In Card</a>
                            </div>  
                            {/* item */}

                            <div className={styles.menu__item}>
                                <img src={Photo3} alt="fd" className={styles.menu__item__image} />
                                <div className={styles.menu__item__category}>meet</div>
                                <div className={styles.menu__item__title}>Stake August</div>
                                <div className={styles.menu__item__description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis at velit maximus, molestie est a, tempor magna.
                                </div>
                                <div className={styles.menu__item__count}>
                                    <div className={styles.menu__item__price}>3 000 $</div>
                                    <div className={styles.menu__item__discount}>4 000 $</div>
                                </div>
                               
                                <a  href = "#f" className={stylesButton.btn + " " + stylesButton.btn__menu}>In Card</a>
                            </div>  
                            {/* item */}

                            <div className={styles.menu__item}>
                                <img src={Photo} alt="fd" className={styles.menu__item__image} />
                                <div className={styles.menu__item__category}>meet</div>
                                <div className={styles.menu__item__title}>Stake August</div>
                                <div className={styles.menu__item__description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis at velit maximus, molestie est a, tempor magna.
                                </div>
                                <div className={styles.menu__item__count}>
                                    <div className={styles.menu__item__price}>3 000 $</div>
                                    <div className={styles.menu__item__discount}>4 000 $</div>
                                </div>
                               
                                <a  href = "#f" className={stylesButton.btn + " " + stylesButton.btn__menu}>In Card</a>
                            </div>  
                            {/* item */}
                        </div>

                        <a href='#f' className={stylesButton.btn + " " + stylesButton.btn__menu}>see more</a>
                </div>
            </div>
        </section>
    )
}