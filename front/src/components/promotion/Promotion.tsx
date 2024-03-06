import styles from "./Promotion.module.scss";
import stylesSection from '../section/Section.module.scss'
import stylesButton from '../ui/button/Button.module.scss'
import stylesSpecially from '../specialty/Specialty.module.scss'
import { Line } from "../ui/line/Line";
import Arrow from '../../img/down-btn.svg'
import { useEffect, useState } from "react";

export const Promotion = (props: any) => {
  const [data, setData] = useState(props.array)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      const lastIndex = data.length - 1;
      if (currentIndex < 0) {
          setCurrentIndex(lastIndex)
      }
      if (currentIndex > lastIndex) {
          setCurrentIndex(0);
      }
  }, [currentIndex, data]);

    useEffect(() => {
      let slider = setInterval(() => setCurrentIndex(prevState => prevState + 1), 5000);
      return () => {
          clearInterval(slider);
      }
    }, [currentIndex])

  return (
    <section className={styles.promotion__slider}>

      <div className={styles.promotion__slider__content}>

        {data.map((d: any, index: number) => {

              
              let position = 'nextSlide';
              if (index === currentIndex) {
                  position = 'activeSlide';
              }

              if (index === currentIndex - 1 || (currentIndex === 0 && index === data.length - 1)) {
                  position = 'lastSlide';
              }           

          return (    
              <article className={styles.promotion  + " " + styles[position]} style={{backgroundImage: `url(${d.photo})`}} key={index}>
                <div className="container">
                  <div className={styles.promotion__inner}>
                      <div className={stylesSpecially.specialty__category + " " + styles.promotion__category}>Promotion</div>
                      <h1 className={stylesSection.section__headline + " " + styles.promotion__headline}>{d.title}</h1>
                      <Line />
                      <div className={stylesSection.section__text + " " + styles.promotion__text}>
                        {d.text}
                      </div>

                      <a href="#fds" className={stylesButton.btn + " " + stylesButton.btn__promotion}>Go to menu</a>
                  </div>
                </div>
              </article>
          )
        })}        
      </div>

      <div className={stylesSpecially.specialty__cyrcles + " " + styles.promotion__cyrcles}>
          {data.map((d: any, index: number) => {
            if(index === currentIndex) {
              return (<div className={stylesSpecially.specialty__cyrcle + " " + stylesSpecially.active}></div>)
            }
            return ( <div className={stylesSpecially.specialty__cyrcle}></div>)
            })}
      </div>

      <button className={stylesButton.btn + " " + stylesButton.btn__promotion__arrow__left} onClick={() => setCurrentIndex(prevState => prevState - 1)}>
          <img src={Arrow} alt="alr" />
      </button>

      <button className={stylesButton.btn + " " + stylesButton.btn__promotion__arrow__right} onClick={() => setCurrentIndex(prevState => prevState + 1)}>
          <img src={Arrow} alt="alr" />
      </button>
    </section>
  );
};
