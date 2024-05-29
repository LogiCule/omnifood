import { PropTypes } from "prop-types";
import "./FeedBack.css";

const FeedBack = ({ name, comment, logo }) => {
  return (
    <figure className="testimonial">
      <img className="testimonial-img" alt={name} src={logo} />
      <blockquote className="testimonial-text">{comment}</blockquote>
      <p className="testimonial-name">&mdash; {name}</p>
    </figure>
  );
};

FeedBack.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  logo: PropTypes.string,
};

export default FeedBack;
