import { DeliveredMeals } from "../../components";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className="btn btn--primary margin-right-sm">
            Start eating well
          </a>
          <a href="#" className="btn btn--secondary">
            Learn More &rarr;
          </a>
          <DeliveredMeals />
        </div>
        <div className="hero-img-box">
          <img src="assets/hero.png" className="hero-img" alt="meals" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
