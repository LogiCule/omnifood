import "./App.css";
import {
  FeaturedIn,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Meals,
  Pricing,
  Testimonials,
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
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
