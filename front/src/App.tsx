import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { MainPage } from "./page/Main/Main";
import { MenuPage } from "./page/Menu/Menu";
import { ContactPage } from "./page/Contact/Contact";
import { ReviewsPage } from "./page/Reviews/Reviews";
import { BookingPage } from "./page/Booking/Booking";
import { CartPage } from "./page/Cart/Cart";
import { ProfilePage } from "./page/Profile/Profile";
import { GaleriePage } from "./page/Galerie/Galerie";


const App = () => {
  return (

    <Routes>
      <Route path="/" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>
      <Route path="/cart" element={
        <>
          <CartPage/>
          <Footer/>
        </>
      }/>

      <Route path="/profile" element={
        <>
          <ProfilePage/>
          <Footer/>
        </>
      }/>

      <Route path="/booking" element={
        <>
          <BookingPage/>
          <Footer/>
        </>
      }/>

      <Route path="/menu" element={
        <>
          <MenuPage/>
          <Footer/>
        </>
      }/>
      
      <Route path="/galerie" element={
        <>
          <GaleriePage/>
          <Footer/>
        </>
      }/>

      <Route path="/reviews" element={
        <>
          <ReviewsPage/>
          <Footer/>
        </>
      }/>

      <Route path="/contact" element={
        <>
          <ContactPage/>
          <Footer/>
        </>
      }/>
      
    </Routes>
    
      
  );
}

export default App;
