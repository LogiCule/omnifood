import List from "../List";

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
      <List list={dietList} />
    </div>
  );
};

export default DietList;
