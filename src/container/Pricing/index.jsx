import { PricingPlan } from "../../components";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the budget
        </h2>
      </div>
      <div className="container grid grid--2-cols">
        <PricingPlan
          name="Starter"
          price="399"
          details={[
            "1 meal per day",
            "Order times are between 11am and 9pm",
            "Delivery is free",
          ]}
        />
        <PricingPlan
          name="Complete"
          price="649"
          details={[
            "2 meal2 per day",
            "Order 24/7",
            "Delivery is free",
            " Get access to latest recipes",
          ]}
        />
      </div>
    </section>
  );
};

export default Pricing;
