import { PropTypes } from "prop-types";
import Tag from "../Tag";
import "./MealCard.css";

const MealCard = ({ path, title, category, attrs }) => {
  return (
    <div className="meal">
      <img src={path} className="meal-img" alt={title} />
      <div className="meal-content">
        <div className="meal-tags">
          {category.map((cat, index) => (
            <Tag
              title={cat.category}
              key={cat.category + index}
              backgroundColor={cat.backgroundColor}
            />
          ))}
        </div>
        <p className="meal-title">{title}</p>
        <ul className="meal-attrs">
          {attrs.map((attr, index) => (
            <li className="meal-attr" key={attr.text + index}>
              {attr.icon} <span>{attr.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.array,
  attrs: PropTypes.array,
};

export default MealCard;
