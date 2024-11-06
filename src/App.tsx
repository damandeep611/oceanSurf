
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import TravelSection from "./components/TravelSection";
import AboutInfo from "./components/ui/AboutInfo";
import Help from "./components/ui/Help";

import Locations from "./components/ui/Locations";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutInfo />
      <Locations />
      <TravelSection />
      <Help />
    </>
  );
}

export default App
