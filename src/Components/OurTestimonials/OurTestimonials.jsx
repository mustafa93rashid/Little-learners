import { useEffect, useRef, useState } from "react";
import OurTestimonialsCard from "../OurTestimonialsCard/OurTestimonialsCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./OurTestimonials.css";
import { TestimonialsData } from "../../Data/TestimonialsData";

const OurTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= TestimonialsData.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TestimonialsData.length - 1 : prev - 1
    );
  };

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 2000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 992) {
        setCardsPerSlide(1);
      } else {
        setCardsPerSlide(3);
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);

    return () => {
      slider.removeEventListener("mouseenter", stopAutoPlay);
      slider.removeEventListener("mouseleave", startAutoPlay);
    };
  }, []);

  return (
    <div className="px-162">
      <TitleComponent
        btnContnet="Their Happy Words 🤗"
        title="Our Testimonials"
        descrption="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className="Mr-TestimonialsAllCard" ref={sliderRef}>
        <div className="Mr-btnWrapper  Mr-btnWrapper1 ">
          <button className="Mr-TestimonialsBtn" onClick={handlePrev}>
            <img src="./Testimonials/leftIcon.svg" alt="left" />
          </button>
        </div>

        <div className="Mr-sliderWrapper">
          <div
            className="Mr-sliderInner"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`,
            }}
          >
            {TestimonialsData.map((data, index) => (
              <OurTestimonialsCard
                key={index}
                icon={data.Image}
                title={data.Name}
                desc={data.desc}
              />
            ))}
          </div>
        </div>

        <div className="Mr-btnWrapper Mr-btnWrapper2">
          <button className="Mr-TestimonialsBtn" onClick={handleNext}>
            <img src="./Testimonials/RightIcon.svg" alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;
