import "./App.css";
import {
  FeaturedIn,
  Footer,
  Gallery,
  Header,
  Hero,
  HowItWorks,
  Meals,
  Pricing,
} from "./container";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Gallery />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
