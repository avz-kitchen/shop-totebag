/* eslint-disable react/jsx-key */
// import imagePath from "../../../../assets/react.svg";
import Benefits from "./Benifits";
import "./Section.css"

const data = [
  {
    // imagePath: imagePath,
    title: "Fare Assortment",
    text: "We offer many different type of products with fewer variations in each category.",
  },
  {
    // imagePath: imagePath,
    title: "Fare Assortment",
    text: "We offer many different type of products with fewer variations in each category.",
  },
  {
    // imagePath: imagePath,
    title: "Fare Assortment",
    text: "We offer many different type of products with fewer variations in each category.",
  },
];

function AboutSection() {
  return (
    <div>
      <h3>ABOUT US</h3>
      <span>Order now and have your everyday companion</span>
      <div className="benefit-container">
        {data.map((element) => {
          const { imagePath, title, text } = element;
          return <Benefits image={imagePath} title={title} text={text} />;
        })}
      </div>
    </div>
  );
}

export default AboutSection;
