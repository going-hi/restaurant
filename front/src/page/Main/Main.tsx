import { Header } from "../../components/header/Header"
import { Gallary } from "../../components/gallary/Gallary"
import { Menu } from "../../components/menu/Menu"
import { Specialty } from "../../components/specialty/Specialty"
import { Section } from "../../components/section/Section"
import Photo from '../../img/about-img.png'
import Photo1 from '../../img/png/about-img.png'
import Background from '../../img/png/specialt-bg.png'
import { Slider } from "../../components/slider/Slider"
import { SectionBackground } from "../../components/section/SectionRight"
import Photo2 from '../../img/Rectanglef.png'
import photo3 from '../../img/Rectangle.png'
const loremDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.'

const loremText = `Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum,
enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. 
Nulla facilisis semper laoreet.`

const array = [
  {
    title: 'Lorem 1',
    text: loremText,
    photo: Background
  },
  {
    title: 'Lorem 2',
    text: loremText,
    photo: Background
  },
  {
    title: 'Lorem 3',
    text: loremText,
    photo: Background
  },
  {
    title: 'Lorem 4',
    text: loremText,
    photo: Background
  }
]

const array1 = [
  {title: 'CHOCOLATE PANCAKES 1', text: loremText, description: loremDescription, photo: photo3},
  {title: 'CHOCOLATE PANCAKES', text: loremText, description: loremDescription, photo: photo3},
  {title: 'CHOCOLATE PANCAKES', text: loremText, description: loremDescription, photo: photo3},
  {title: 'CHOCOLATE PANCAKES', text: loremText, description: loremDescription, photo: photo3},
  {title: 'CHOCOLATE PANCAKES', text: loremText, description: loremDescription, photo: photo3},
]

export const MainPage = () => {
    return (
      <>
        <Header/>
        <Section title = "about as " description = {loremDescription} text = {loremText} photo = {Photo} />
        <SectionBackground title = "master chef" description = {loremDescription} text = {loremText} photo = {Photo2} category = 'our team'/>
        <Section title = "book a table" description = {loremDescription} text = {loremText} photo = {Photo1} />
        {/* <SliderSection array = {array1}/> */}
        <Specialty/>
        <Menu/>
        <Slider array = {array}/>
        <Gallary/>
      </>
    )
}