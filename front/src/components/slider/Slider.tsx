import styles from "../promotion/Promotion.module.scss";
import stylesSpecially from '../specialty/Specialty.module.scss'
import { useEffect, useState } from "react";
import { SliderItem } from "./components/SliderItem";
import { ArrowLeft, ArrowRight } from "./components/Arrow";

export const Slider = (props: any) => {
    const [data,] = useState(props.array)
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
             <SliderItem position = {position} photo = {d.photo} title = {d.title} text = {d.text} btnText = 'go to menu' id = {index} />
          )
        })}        
      </div>

      <div className={stylesSpecially.specialty__cyrcles + " " + styles.promotion__cyrcles}>
          {data.map((d: any, index: number) => {
            if(index === currentIndex) {
              return (<div className={stylesSpecially.specialty__cyrcle + " " + stylesSpecially.active} key={index}></div>)
            }
            return ( <div className={stylesSpecially.specialty__cyrcle} key={index}></div>)
            })}
      </div>

      <ArrowLeft  click = {() => setCurrentIndex(prevState => prevState - 1)}/>
      <ArrowRight click = {() => setCurrentIndex(prevState => prevState + 1)}/>
    </section>
  );
};
