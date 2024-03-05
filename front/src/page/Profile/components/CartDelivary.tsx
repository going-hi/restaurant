import styles from '../Profile.module.scss'
import Icon from '../../../img/png/dost.png'

export const CartDeliveryItem = () => {

    return (
        <div className={styles.profile__content__history__item}>
            <img src={Icon} alt="f" className={styles.profile__content__history__item__img}/>
            <div>
                <div className={styles.profile__content__history__item__title}>Order #43</div>
                <div className={styles.profile__content__history__item__text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ea consequuntur quaerat, sapiente saepe error eos fuga? Ratione, reprehenderit error.</div>

            </div>
            <span className={styles.profile__content__history__item__status + " " + styles.profile__green}>Delived</span>
        </div>
    )
}