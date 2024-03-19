import "./DeliveredMeal.css";

const DeliveredMeals = () => {
  const imgNames = [
    "customer-1.jpg",
    "customer-2.jpg",
    "customer-3.jpg",
    "customer-4.jpg",
    "customer-5.jpg",
    "customer-6.jpg",
  ];
  return (
    <div className="delivered-meals">
      <div className="delivered-imgs">
        {imgNames.map((name) => (
          <img
            src={`assets/customers/${name}`}
            key={name}
            alt="customer photo"
          />
        ))}
      </div>
      <p className="delivered-text">
        <span>250,000+</span> meals delivered last year!
      </p>
    </div>
  );
};

export default DeliveredMeals;
