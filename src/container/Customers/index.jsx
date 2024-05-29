import { FeedBack } from "../../components";
import "./Customers.css";
const Customers = () => {
  return (
    <div className="testimonials">
      <FeedBack
        name="Dave Bryson"
        comment="Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical."
        logo="/public/assets/customers/dave.jpg"
      />
      <FeedBack
        name="Ben Hadley"
        comment="The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!"
        logo="/public/assets/customers/ben.jpg"
      />
      <FeedBack
        name="Steve Miller"
        comment="Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now! "
        logo="/public/assets/customers/steve.jpg"
      />
      <FeedBack
        name="Hannah Smith"
        comment="I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic."
        logo="/public/assets/customers/hannah.jpg"
      />
    </div>
  );
};

export default Customers;
