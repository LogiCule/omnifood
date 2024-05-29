import { PropTypes } from "prop-types";
import List from "../List";

const PricingPlan = ({ name, price, details }) => {
  return (
    <div className="pricing-plan">
      <p className="plan-name">{name}</p>
      <p className="plan-price">
        <span>$</span>
        {price}
      </p>
      <p className="plan-text">per month.</p>
      <List list={details} />
    </div>
  );
};

PricingPlan.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  details: PropTypes.array,
};
export default PricingPlan;
