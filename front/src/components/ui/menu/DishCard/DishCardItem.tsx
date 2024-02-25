
import styles from './DishCard.module.scss'
import Photo from '../../../../img/3db05a0964124b98a5f0d9688790664f.jpg'
import stylesButton from '../../button/Button.module.scss'

export const DishCardItem = (props: any) => {
    return (
        <div className={styles.dishCard__item}>
        <img src={Photo} alt="fd" className={styles.dishCard__item__image} />
        <div className={styles.dishCard__item__category}>{props.category}</div>
        <div className={styles.dishCard__item__title}>{props.title}</div>
        <div className={styles.dishCard__item__description}>
            {props.description}
        </div>
        <div className={styles.dishCard__item__count}>
            <div className={styles.dishCard__item__price}>{props.price}</div>
            {props.oldPrice ? (
                <div className={styles.dishCard__item__discount}>{props.oldPrice}</div>
            ) : (<></>)}
        </div>
       
        <a  href = "#f" className={stylesButton.btn + " " + stylesButton.btn__menu}>In Card</a>
    </div>  
    )
}