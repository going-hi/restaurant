import { Nav } from "../../components/nav/Nav"
import Background from '../../img/header-bg.png'
import { Container } from "../../components/ui/container/Container"
import styles from './Galerie.module.scss'
import stylesSection from '../../components/section/Section.module.scss'
import stylesButton from '../../components/ui/button/Button.module.scss'
import { Line } from "../../components/ui/line/Line"
import Photo from '../../img/IMG_4427.jpg'
export const GaleriePage = () => {
    
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
            <section className={styles.galerie}>
            <Container>
                <div className={styles.galerie__inner}>
                        <h2 className={stylesSection.section__headline}>galerie</h2>
                        <Line/>
                        <div className={stylesSection.section__text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>

                        <div className={styles.galerie__items}>
                            <div className={styles.galerie__item}>
                                <img src={Photo} alt="" />
                            </div>

                            <div className={styles.galerie__item}>
                                <img src={Photo} alt="" />
                            </div>

                            <div className={styles.galerie__item}>
                                <img src={Photo} alt="" />
                            </div>

                            <div className={styles.galerie__item}>
                                <img src={Photo} alt="" />
                            </div>

                            <div className={styles.galerie__item}>
                                <img src={Photo} alt="" />
                            </div>

                            <div className={styles.galerie__item}>
                                <img src={Photo} alt="" />
                            </div>
                        </div>

                </div>
            </Container>
        </section>
        </>

    )
}