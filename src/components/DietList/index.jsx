import List from "../List";
import "./DietList.css";

const dietList = [
  { text: "Vegetarian" },
  { text: "Vegan" },
  { text: "Pescatarian" },
  { text: "Gluten-free" },
  { text: "Lactose-free" },
  { text: "Keto" },
  { text: "Paleo" },
  { text: "Low FODMAP" },
  { text: "Kid-friendly" },
];

const DietList = () => {
  return (
    <div className="diets">
      <h3 className="heading-tertiary">Works with any diet:</h3>
      <List list={dietList} />
    </div>
  );
};

export default DietList;
