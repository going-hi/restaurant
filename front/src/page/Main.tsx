import { About } from "../components/about/About"
import { Header } from "../components/header/Header"
import { BookTable } from "../components/bookTable/BookTable"
import { Gallary } from "../components/gallary/Gallary"
import { Menu } from "../components/menu/Menu"
import { OurTeam } from "../components/ourTeam/OurTeam"
import { Promotion } from "../components/promotion/Promotion"
import { Specialty } from "../components/specialty/Specialty"

export const MainPage = () => {
    return (
      <>
        <Header/>
        <About/>
        <OurTeam/>
        <BookTable/>
        <Specialty/>
        <Menu/>
        <Promotion/>
        <Gallary/>
      </>
    )
}