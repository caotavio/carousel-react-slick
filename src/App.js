import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
// import astronaut from "./assets/astronaut.png";
// import celebrating from "./assets/celebrating.png";
// import education from "./assets/education.png";
// import taken from "./assets/taken.png";
import card from "./assets/card.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [card, card2, card3, card4, card5];

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={(imageIndex !== images.length - 1) ? "arrow next" : "arrow next arrowDisabled"}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={imageIndex === 0 ? "arrow prev arrowDisabled" : "arrow prev"}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };
  
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{
          margin: "0px",
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "5px"
        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className="customDots"
        style={{
          width: "30px",
          height: "5px",
          borderRadius: "50px",
          overflow: "hidden",
          marginTop: "15px"
        }}
      >
        {i + 1}
      </div>
    )
  };
  
  return (
    <div className="App">
      <Slider {...settings}>
      {images.map((img, idx) => (
          <div
            className={idx === imageIndex ?
              "slide activeSlide" : idx === (imageIndex -1) ?
              "slide slideLeft" : idx === (imageIndex +1) ?
              "slide slideRight" : "slide slideLeft noSlide"}
          >
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
