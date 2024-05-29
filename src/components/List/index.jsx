import { CheckmarkOutline } from "react-ionicons";
import { PropTypes } from "prop-types";
import "./List.css";

const List = ({ list }) => {
  return (
    <ul className="list">
      {list.map((item, index) => (
        <li className="list-item" key={index}>
          <CheckmarkOutline
            className="list-icon"
            width="3rem"
            height="3rem"
            color="#e67e22"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array,
};

export default List;
