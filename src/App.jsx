import "./App.css";
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
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
