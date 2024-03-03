import { CheckBox } from "../../../components/ui/checkbox/Checkbox"
import { Quantity } from "../../../components/ui/quantity/Quantity"
import styles from '../Cart.module.scss'
import Photo from '../../../img/3db05a0964124b98a5f0d9688790664f.jpg'

export const CartItem = (props: any) => {
    return (
        <div className={styles.cart__item}>
            <div className={styles.cart__item__close}>✖</div>
            <img src={Photo} alt="das" className={styles.cart__item__img} />
            <div className={styles.cart__item__content}>
                <div className={styles.cart__item__content__name}>Пицца</div>
                <div className={styles.cart__item__content__microdescription}>Микро тетовпыапоыв</div>
            </div>

            <div className={styles.cart__item__quantity}>
                <Quantity/>
            </div>
            <div className={styles.cart__item__price}>2700 ₽</div>

            <div className={styles.cart__item__action}>
                <CheckBox/>
            </div>
        </div>
    )
}