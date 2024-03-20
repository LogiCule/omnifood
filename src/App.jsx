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
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Gallery />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
