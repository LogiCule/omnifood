import { useEffect, useState } from "react";
import {
  CallToAction,
  FeaturedIn,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Meals,
  Pricing,
  Testimonials,
} from "./container";
import { StateContextProvider } from "./context";

function App() {
  const [isNav, setIsNav] = useState(true);

  useEffect(() => {
    const appElement = document.getElementById("root");

    if (!isNav) {
      appElement.style.height = "100vh";
      appElement.style.overflow = "hidden";
    } else {
      appElement.style.height = "";
      appElement.style.overflow = "";
    }
  }, [isNav]);

  return (
    <StateContextProvider value={{ isNav, setIsNav }}>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </StateContextProvider>
  );
}

export default App;
