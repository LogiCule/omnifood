import { FlameOutline, RestaurantOutline, StarOutline } from "react-ionicons";
import { DietList, MealCard } from "../../components";
import "./Meals.css";

const iconColor = "#e67e22";

const Meals = () => {
  const meals = [
    {
      title: "Japanese Gyozas",
      path: "assets/meals/meal-1.jpg",
      category: [{ category: "Vegetarian", backgroundColor: "#51cf66" }],
      attrs: [
        {
          icon: (
            <FlameOutline
              className="meal-icon"
              color={iconColor}
              height="1.8rem"
              width="1.8rem"
            />
          ),
          text: (
            <>
              <strong>650</strong> calories
            </>
          ),
        },
        {
          icon: (
            <RestaurantOutline
              className="meal-icon"
              color={iconColor}
              height="1.8rem"
              width="1.8rem"
            />
          ),
          text: (
            <>
              NutriScore ® <strong>74</strong>
            </>
          ),
        },
        {
          icon: (
            <StarOutline
              className="meal-icon"
              color={iconColor}
              height="1.8rem"
              width="1.8rem"
            />
          ),
          text: (
            <>
              <strong>4.9</strong> rating (537)
            </>
          ),
        },
      ],
    },
    {
      title: "Avocado Salad",
      path: "assets/meals/meal-2.jpg",
      category: [
        { category: "Vegan", backgroundColor: "#94d82d" },
        { category: "Paleo", backgroundColor: "#fdd43b" },
      ],
      attrs: [
        {
          icon: (
            <FlameOutline
              className="meal-icon"
              color={iconColor}
              height="1.8rem"
              width="1.8rem"
            />
          ),
          text: (
            <>
              <strong>400</strong> calories
            </>
          ),
        },
        {
          icon: (
            <RestaurantOutline
              className="meal-icon"
              color={iconColor}
              height="1.8rem"
              width="1.8rem"
            />
          ),
          text: (
            <>
              NutriScore ® <strong>92</strong>
            </>
          ),
        },
        {
          icon: (
            <StarOutline
              className="meal-icon"
              color={iconColor}
              height="1.8rem"
              width="1.8rem"
            />
          ),
          text: (
            <>
              <strong>4.8</strong> rating (441)
            </>
          ),
        },
      ],
    },
  ];
  return (
    <section className="section-meals" id="meals">
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols">
        {meals.map((meal) => (
          <MealCard key={meal.title} {...meal} />
        ))}

        <DietList />
      </div>
    </section>
  );
};

export default Meals;
