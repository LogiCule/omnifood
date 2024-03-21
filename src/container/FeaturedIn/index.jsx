import "./FeaturedIn.css";
const logos = [
  "business-insider",
  "forbes",
  "techcrunch",
  "the-new-york-times",
  "usa-today",
];

const FeaturedIn = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured">As featured in</h2>
        <div className="logos">
          {logos.map((logo) => (
            <img src={`assets/logos/${logo}.png`} alt="logo" key={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
