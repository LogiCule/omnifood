import Customers from "../Customers";
import Gallery from "../Gallery";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section
      className="section-testimonials grid grid--2-cols"
      id="testimonials"
    >
      <div>
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you cant go back!
        </h2>
        <Customers />
      </div>
      <Gallery />
    </section>
  );
};

export default Testimonials;
