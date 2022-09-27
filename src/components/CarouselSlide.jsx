import React, { useState, useEffect } from "react";
import axios from "axios";

import img1 from "../assets/carousel-images/pic-01.jpg";
import img2 from "../assets/carousel-images/pic-02.jpg";
import img3 from "../assets/carousel-images/pic-03.jpg";
import img4 from "../assets/carousel-images/pic-04.jpg";
import img5 from "../assets/carousel-images/pic-05.jpg";
import img6 from "../assets/carousel-images/pic-06.jpg";
import img7 from "../assets/carousel-images/pic-07.jpg";
import img8 from "../assets/carousel-images/pic-08.jpg";
import img9 from "../assets/carousel-images/pic-09.jpg";
import img10 from "../assets/carousel-images/pic-10.jpg";

function CarouselSlide(props) {
  const [carouselSlides, setCarouselSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);
  const slideImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3600/api/carousels?slides=" + props.slides)
      .then((res) => {
        console.log("Fetched all todos list: ", res.data);
        setCarouselSlides(res.data);
        showSlides(1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.slides]);

  function showSlides(n) {
    setTimeout(() => {
      let i;
      let slides = document.getElementsByClassName("eyepax-slides");
      if (n > slides.length) {
        setSlideIndex(1);
      }
      if (n < 1) {
        setSlideIndex(slides.length);
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex - 1].style.display = "block";
      setSlideIndex(n);
    }, 500);
  }

  function prevSlide() {
    let next = slideIndex - 1;
    showSlides(next);
  }

  function nextSlide() {
    let next = slideIndex + 1;
    showSlides(next);
  }

  return (
    <>
      {/* <img src={img1} alt="test"></img> */}
      <div className="eyepax-slideshow-container">
        {carouselSlides.map((slide, index) => {
          return (
            <div className="eyepax-slides" key={slide._id}>
              <img
                src={slideImages[index]}
                alt="slider-backdrop"
                style={{ width: "100%" }}
              ></img>
              <div className="text">Caption Text</div>
            </div>
          );
        })}
        <a
          className="prev"
          href="javascript:void(0);"
          onClick={() => {
            prevSlide();
          }}
        >
          ❮
        </a>
        <a
          className="next"
          href="javascript:void(0);"
          onClick={() => {
            nextSlide();
          }}
        >
          ❯
        </a>
      </div>
    </>
  );
}

export default CarouselSlide;
