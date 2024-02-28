import { Nav } from "../../components/nav/Nav"
import Background from '../../img/header-bg.png'
import { Container } from "../../components/ui/container/Container"
import styles from './Booking.module.scss'
import stylesSection from '../../components/section/Section.module.scss'
import stylesButton from '../../components/ui/button/Button.module.scss'
import { Line } from "../../components/ui/line/Line"
import { Categories } from "../../components/ui/menu/categories/Categories"
import { DishCards } from "../../components/ui/menu/DishCard/DishCards"
import { Table } from "./Table"

export const BookingPage = () => {
    
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
            <section className={styles.booking}>
                <Container>
                    <div className={styles.booking__inner}>
                            <h2 className={stylesSection.section__headline}>Booking</h2>
                                <Line/>
                            <div className={stylesSection.section__description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className={stylesSection.section__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis at velit maximus, molestie est a, tempor magna.
                                Duis at velit maximus, molestie est a, tempor agna.
                            </div>
                    </div>
                </Container>
            </section>
            <section className={styles.booking__map}>
                <Container>
                    <div className={styles.booking__content}>
                        <input type="date" className={styles.booking__input__date} />
                    </div>
                   

                   <div className={styles.booking__map__inner}>
                        <div className={styles.booking__tables} style={{width: '50%'}}>

                            <div className={styles.booking__hall}>
                                <Table text = '1' booked = {true}/>
                                <Table text = '2'/>
                                <Table text = '3'/>
                                <Table text = '4' booked = {true}/>
                                <Table text = '5' booked = {true}/>
                                <Table text = '6'/>
                                <Table text = '7'/>
                                <Table text = '8'/>
                                <Table text = '9'/>
                                <Table text = '10'/>
                                <Table text = '11' booked = {true}/>
                                <Table text = '12'  booked = {true}/>
                                <Table text = '13' booked = {true}/>
                                <Table text = '14'/>
                             </div>

                        </div>

                        <div className={styles.booking__tables}>
                            <div style={{height: '50%'}} className={styles.booking__hall} >
                                <Table text = '15'/>
                                <Table text = '16'/>
                                <Table text = '17' />
                                <Table text = '18'/>
                             </div>

                             <div style={{height: '50%', borderLeft: '1px solid #fff'}} className={styles.booking__hall} >
                                <Table text = '19' booked = {true}/>
                                <Table text = '20'/>
                                <Table text = '21'/>
                                <Table text = '22'/>
                                <Table text = '23'/>
                                <Table text = '24' booked = {true}/>
                                <Table text = '25' booked = {true}/>
                                <Table text = '26'/>
                                <Table text = '27'/>
                                <Table text = '28' booked = {true}/>
                                
                             </div>
                            
                        </div>

                    </div> 
                </Container>
            </section>
        </>

    )
}