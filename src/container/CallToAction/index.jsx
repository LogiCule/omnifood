import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="section-cta">
      <div className="container ">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form
              className="cta-form"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  name="full-name"
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="abc@example.com"
                  name="email"
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" name="id-where">
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">Youtube Video</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Ad">Facebook Ad</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <button className="btn btn--form">Sign Up Now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="customer enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
