import { Nav } from "../../components/nav/Nav"
import Background from '../../img/header-bg.png'
import { Container } from "../../components/ui/container/Container"
import styles from './Reviews.module.scss'
import stylesSection from '../../components/section/Section.module.scss'
import stylesButton from '../../components/ui/button/Button.module.scss'
import { Line } from "../../components/ui/line/Line"
import { ReviewItem } from "./ReviewItem"

export const ReviewsPage = () => {
    
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
            <section className={styles.reviews}>
            <Container>
                <div className={styles.reviews__inner}>
                        <h2 className={stylesSection.section__headline}>Reviews</h2>
                        <Line/>
                        <div className={stylesSection.section__text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Duis at velit maximus, molestie est a, tempor magna.
                             Duis at velit maximus, molestie est a, tempor agna.
                        </div>

                        <button className={stylesButton.btn + " " + stylesButton.btn__review} style={{margin: "10px 0 0"}}>Create review</button>

                        <div className={styles.reviews__items}>
                        <ReviewItem name='Светлана' 
                                    text = {`Вчера ехали по Приморскому шоссе с женой и детьми. Давно не ехал по данному маршруту и был удивлен увидев в Серово такой красивый ресторан в таком красивом месте. 
                                            Конечно остановились и зашли. Очень уютная обстановка, идеальный пейзаж за окнами. Немного напрягла неотзывчивость официантов. Долго никто не подходил, но в 
                                            конце концов все исправил как я понимаю администратор, который сам принял заказ и сам же его принес. Заказывали салат цезарь и пиццу Маргарита. 
                                            Очень вкусно оказалось и то и другое, 
                                            особенно пицца которая прямо пахла хорошим сыром и дровами. Еще порадовал хоть и маленький но приятный презент в виде оливок которые нам принесли 
                                            пока мы ждали заказ. Вообщем будем сами
                                             приезжать и друзьям посоветуем. Удачи вам, спасибо приятный вечер.`}
                                    date = '22.22.23'
                                    />
                        <ReviewItem name='Светлана' 
                                    text = {`Вчера ехали по Приморскому шоссе с женой и детьми. Давно не ехал по данному маршруту и был удивлен увидев в Серово такой красивый ресторан в таком красивом месте. 
                                            Конечно остановились и зашли. Очень уютная обстановка, идеальный пейзаж за окнами. Немного напрягла неотзывчивость официантов. Долго никто не подходил, но в 
                                            конце концов все исправил как я понимаю администратор, который сам принял заказ и сам же его принес. Заказывали салат цезарь и пиццу Маргарита. 
                                            Очень вкусно оказалось и то и другое, 
                                            особенно пицца которая прямо пахла хорошим сыром и дровами. Еще порадовал хоть и маленький но приятный презент в виде оливок которые нам принесли 
                                            пока мы ждали заказ. Вообщем будем сами
                                             приезжать и друзьям посоветуем. Удачи вам, спасибо приятный вечер.`}
                                    date = '22.22.23'
                                    />
                        <ReviewItem name='Светлана' 
                                    text = {`Вчера ехали по Приморскому шоссе с женой и детьми. Давно не ехал по данному маршруту и был удивлен увидев в Серово такой красивый ресторан в таком красивом месте. 
                                            Конечно остановились и зашли. Очень уютная обстановка, идеальный пейзаж за окнами. Немного напрягла неотзывчивость официантов. Долго никто не подходил, но в 
                                            конце концов все исправил как я понимаю администратор, который сам принял заказ и сам же его принес. Заказывали салат цезарь и пиццу Маргарита. 
                                            Очень вкусно оказалось и то и другое, 
                                            особенно пицца которая прямо пахла хорошим сыром и дровами. Еще порадовал хоть и маленький но приятный презент в виде оливок которые нам принесли 
                                            пока мы ждали заказ. Вообщем будем сами
                                             приезжать и друзьям посоветуем. Удачи вам, спасибо приятный вечер.`}
                                    date = '22.22.23'
                                    />
                        <ReviewItem name='Светлана' 
                                    text = {`Вчера ехали по Приморскому шоссе с женой и детьми. Давно не ехал по данному маршруту и был удивлен увидев в Серово такой красивый ресторан в таком красивом месте. 
                                            Конечно остановились и зашли. Очень уютная обстановка, идеальный пейзаж за окнами. Немного напрягла неотзывчивость официантов. Долго никто не подходил, но в 
                                            конце концов все исправил как я понимаю администратор, который сам принял заказ и сам же его принес. Заказывали салат цезарь и пиццу Маргарита. 
                                            Очень вкусно оказалось и то и другое, 
                                            особенно пицца которая прямо пахла хорошим сыром и дровами. Еще порадовал хоть и маленький но приятный презент в виде оливок которые нам принесли 
                                            пока мы ждали заказ. Вообщем будем сами
                                             приезжать и друзьям посоветуем. Удачи вам, спасибо приятный вечер.`}
                                    date = '22.22.23'
                                    />
                        </div>

                        <button className={stylesButton.btn + " " + stylesButton.btn__review}>See more</button>
                </div>

            </Container>
        </section>
        </>

    )
}