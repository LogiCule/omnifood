import { PropTypes } from "prop-types";
import "./ImgBox.css";

const ImgBox = ({ path, alt }) => {
  return (
    <div className="step-img-box">
      <img src={path} className="step-img" alt={alt} />
    </div>
  );
};
ImgBox.propTypes = {
  path: PropTypes.string,
  alt: PropTypes.string,
};

export default ImgBox;
