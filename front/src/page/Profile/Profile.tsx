import { Nav } from "../../components/nav/Nav"
import Background from '../../img/header-bg.png'
import { Container } from "../../components/ui/container/Container"
import styles from './Profile.module.scss'
import stylesSection from '../../components/section/Section.module.scss'
import stylesButton from '../../components/ui/button/Button.module.scss'
import { Line } from "../../components/ui/line/Line"
import Icon from '../../img/png/dost.png'
import { CartDeliveryItem } from "./components/CartDelivary"

export const ProfilePage = () => {
    
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
            <section className={styles.profile}>
            <Container>
                <div className={styles.profile__inner}>
                        <h2 className={stylesSection.section__headline}>your profile</h2>
                        <Line/>
                        <div className={stylesSection.section__text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>

                        <div className={styles.profile__content}>
                            <div className={styles.profile__content__data}>
                                <div className={styles.profile__content__data__item}>
                                    <input type="text" placeholder="Ваше имя" defaultValue='Артем' className={styles.profile__content__data__item__input}/>
                                    <button className={stylesButton.btn + " " + stylesButton.btn__profile__update}>Изменить</button>
                                </div>
                                
                                <div className={styles.profile__content__data__item}>
                                    <input type="text" placeholder="Ваше имя" defaultValue='Артем' className={styles.profile__content__data__item__input}/>
                                    <button className={stylesButton.btn + " " + stylesButton.btn__profile__update}>Изменить</button>
                                </div>
 
                                <div className={styles.profile__content__data__item}>
                                    <input type="text" placeholder="Ваш телефон" defaultValue='+7(900) 897 23-23' className={styles.profile__content__data__item__input}/>
                                    <button className={stylesButton.btn + " " + stylesButton.btn__profile__update}>Изменить</button>
                                </div>

                                <button className={stylesButton.btn + " " + stylesButton.btn__profile__save}>Сохранить</button>
                                <br/>
                                <button className={stylesButton.btn + " " + stylesButton.btn__profile__logout}>Выйти из аккаунта</button>
                            </div>

                            <div className={styles.profile__content__history}>
                                <CartDeliveryItem/>
                                <CartDeliveryItem/>
                                <CartDeliveryItem/>
                                <CartDeliveryItem/>
                            </div>
                        </div>
                     
                </div>
            </Container>
        </section>
        </>

    )
}