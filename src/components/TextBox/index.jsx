import { PropTypes } from "prop-types";

import "./TextBox.css";

const TextBox = ({ stepNo, title, desc }) => {
  return (
    <div className="step-text-box">
      <p className="step-number">{stepNo}</p>
      <h3 className="heading-tertiary">{title}</h3>
      <p className="step-description">{desc}</p>
    </div>
  );
};

TextBox.propTypes = {
  stepNo: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default TextBox;
