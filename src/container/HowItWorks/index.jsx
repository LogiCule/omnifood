import { ImgBox, TextBox } from "../../components";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        <TextBox
          stepNo="01"
          title="Tell us what you like (and what not)"
          desc="Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!"
        />
        <ImgBox
          path="assets/app/app-screen-1.png"
          alt="iPhone app prefrerences"
        />

        <ImgBox
          path="assets/app/app-screen-2.png"
          alt="iPhone app prefrerences"
        />
        <TextBox
          stepNo="02"
          title="Approve your weekly meal plan"
          desc="Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes."
        />

        <TextBox
          stepNo="03"
          title="Receive meals at convenient time"
          desc="Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!"
        />
        <ImgBox
          path="assets/app/app-screen-3.png"
          alt="iPhone app prefrerences"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
