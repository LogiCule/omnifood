import "./ImgCard.css";
import { PropTypes } from "prop-types";

const ImgCard = ({ imgPath }) => {
  return (
    <figure className="gallery-item">
      <img src={imgPath} alt="Food" />
    </figure>
  );
};

ImgCard.propTypes = {
  imgPath: PropTypes.string,
};

export default ImgCard;
