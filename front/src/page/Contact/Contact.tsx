import { Nav } from "../../components/nav/Nav"
import Background from '../../img/header-bg.png'
import { Container } from "../../components/ui/container/Container"
import styles from './Contact.module.scss'
import stylesSection from '../../components/section/Section.module.scss'
import stylesButton from '../../components/ui/button/Button.module.scss'
import { Line } from "../../components/ui/line/Line"
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"

export const ContactPage = () => {
    
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
            <section className={styles.contact}>
            <Container>
                <div className={styles.contact__inner}>
                        <h2 className={stylesSection.section__headline}>Contact</h2>
                            <Line/>
                        <div className={stylesSection.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Duis at velit maximus, molestie est a, tempor magna.
                             Duis at velit maximus, molestie est a, tempor agna.
                        </div>
                        <div className={stylesSection.section__text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Duis at velit maximus, molestie est a, tempor magna.
                             Duis at velit maximus, molestie est a, tempor agna.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Duis at velit maximus, molestie est a, tempor magna.
                             Duis at velit maximus, molestie est a, tempor agna.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Duis at velit maximus, molestie est a, tempor magna.
                             Duis at velit maximus, molestie est a, tempor agna.
                            
                        </div>
                </div>
                <div style={{border: '1px solid #333'}}>
                <YMaps>
                    <Map defaultState={{ center: [51.36, 42.07], zoom: 9 }} width='100%' height={'300px'}> 
                        <Placemark defaultGeometry={[51.36, 42.07]} />
                    </Map>
                </YMaps>
                </div>
                
            </Container>
        </section>
        </>

    )
}