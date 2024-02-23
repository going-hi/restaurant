import { Container } from "../ui/container/Container";
import { Line } from "../ui/line/Line";
import styles from "./Section.module.scss";


export const Section = (props: any) => {

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.section__inner}>
          <div className={styles.section__content}>
            <h1 className={styles.section__headline}>{ props.title }</h1>
            <Line />
            <div className={styles.section__description}>{ props.description }</div>
            <div className={styles.section__text}>{ props.text }</div>
          </div>

          <div className={styles.section__content__image}>
            <img src={props.photo} alt="d" />
            <div className={styles.section__content__image__border}></div>
          </div>

        </div>

      </Container>
    </section>
  );
};
