import { PropTypes } from "prop-types";
import "./FeatureCard.css";

const FeatureCard = ({ text, title, icon }) => {
  return (
    <div className="feature">
      {icon}
      <p className="feature-title">{title}</p>
      <p className="feature-text">{text}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.Node,
};
export default FeatureCard;
