import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { OurTeam } from "./components/ourTeam/OurTeam";

import { Specialty } from "./components/specialty/Specialty";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <About/>
      <OurTeam/>
      <About/>
      <Specialty/>
    </div>
  );
}

export default App;
