import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { MainPage } from "./page/Main";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>
      <Route path="/about" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>

      <Route path="/team" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>

      <Route path="/booking" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>

      <Route path="/menu" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>
      
      <Route path="/galerie" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>

      <Route path="/events" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>

      <Route path="/contect" element={
        <>
          <MainPage/>
          <Footer/>
        </>
      }/>
      
    </Routes>
    
      
  );
}

export default App;
