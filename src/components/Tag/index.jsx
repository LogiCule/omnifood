import { PropTypes } from "prop-types";
import "./Tag.css";

const Tag = ({ title, backgroundColor }) => {
  return (
    <span className="tag" style={{ backgroundColor: backgroundColor }}>
      {title}
    </span>
  );
};

Tag.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Tag;
