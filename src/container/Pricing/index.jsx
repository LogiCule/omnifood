import {
  InfiniteOutline,
  LeafOutline,
  NutritionOutline,
  PauseOutline,
} from "react-ionicons";
import { PricingPlan } from "../../components";
import FeatureCard from "../../components/FeatureCard";

import "./Pricing.css";

const style = {
  color: "#e67e22",
  height: "2.4rem",
  width: "2.4rem",
  marginBottom: "3.2rem",
};
const featureList = [
  {
    icon: <InfiniteOutline {...style} />,
    title: "Never cook again!",
    text: "Our subscriptions cover 365 days per year, even including major holidays.",
  },
  {
    icon: <LeafOutline {...style} />,
    title: "Local and organic",
    text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
  },
  {
    icon: <NutritionOutline {...style} />,
    title: "No waste",
    text: "All our partners only use reusable containers to package all your meals",
  },
  {
    icon: <PauseOutline {...style} />,
    title: "Pause anytime",
    text: "Going on vacation? Just pause your subscription, and we refund unused days.",
  },
];
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
          extraClass="starter"
          name="Starter"
          price="399"
          details={[
            { text: "1 meal per day" },
            { text: "Order from 11am and 9pm" },
            { text: "Delivery is free" },
            { text: "", isFalse: true },
          ]}
        />
        <PricingPlan
          name="Complete"
          price="649"
          extraClass="complete"
          details={[
            { text: "2 meal per day" },
            { text: "Order 24/7" },
            { text: "Delivery is free" },
            { text: "Get access to latest recipes" },
          ]}
        />
      </div>
      <div className="container grid grid--4-cols">
        {featureList.map((feature, index) => {
          return <FeatureCard key={index} {...feature} />;
        })}
      </div>
    </section>
  );
};

export default Pricing;
