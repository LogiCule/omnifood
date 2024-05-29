import { CheckmarkOutline } from "react-ionicons";
import "./DietList.css";
const dietList = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
  "Low FODMAP",
  "Kid-friendly",
];
const DietList = () => {
  return (
    <div className="diets">
      <h3 className="heading-tertiary">Works with any diet:</h3>
      <ul className="list">
        {dietList.map((item, index) => (
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
    </div>
  );
};

export default DietList;
