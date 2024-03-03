import { Container } from '../../components/ui/container/Container'
import stylesSection from '../../components/section/Section.module.scss'
import styles from './Cart.module.scss'
import Background from '../../img/header-bg.png'
import { Nav } from '../../components/nav/Nav'
import { LineFull } from '../../components/ui/line/LineFull'
import stylesButton from '../../components/ui/button/Button.module.scss'
import { CartItem } from './components/CartItem'

export const CartPage = () => {

    const styleBackground = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <>
            
            <div style={styleBackground}>
                <Container>
                    <Nav/>
                </Container>
            </div>
        
            <section className={styles.cart}>
                <Container>
                    <div className={styles.cart__inner}>
                            <h2 className={stylesSection.section__headline}>Cart</h2>
                            <LineFull/>
        
                            <div className={styles.cart__items}>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                            </div>

                            <div className={styles.cart__info}>
                                <div className={styles.cart__info__total__price}>Total price: <span>2 453 435.00 ₽</span></div>
                                <div className={styles.cart__promo}>
                                    <input placeholder='Введите промокод' className={styles.cart__promo__input}/>
                                    <button onClick={() => console.log('e')} className={stylesButton.btn + " " + styles.btn__input__promo}>Применить</button>
                                </div>  
                                
                                <button className={stylesButton.btn + " " + stylesButton.btn__cart}>Заказать</button>
                            </div>
                    </div>
                </Container>
            </section>
        </>

       
    )
}