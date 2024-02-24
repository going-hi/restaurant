import stylesButton from '../../ui/button/Button.module.scss'
import ArrowPhoto from '../../../img/down-btn.svg'

export const ArrowLeft = (props: any) => {
    return (
        <button className={stylesButton.btn + " " + stylesButton.btn__promotion__arrow__left} onClick={props.click}>
            <img src={ArrowPhoto} alt="alr" />
        </button>
    )
}

export const ArrowRight = (props: any) => {
    return (
       <button className={stylesButton.btn + " " + stylesButton.btn__promotion__arrow__right} onClick={props.click}>
            <img src={ArrowPhoto} alt="alr" />
        </button>
    )
}
