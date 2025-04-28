import { useState, useEffect } from "react";
import OurTestimonialsCard from "../OurTestimonialsCard/OurTestimonialsCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import { TestimonialsData } from "../../Data/TestimonialsData";
import "./OurTestimonials.css";

const OurTestimonials = () => {
  // State to track the current starting index of visible testimonials
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to determine how many testimonial cards to show based on screen width
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Function to update number of cards per slide depending on window width
  const updateCardsPerSlide = () => {
    if (window.innerWidth <= 992) {
      setCardsPerSlide(1); // Mobile view: show 1 card
    } else {
      setCardsPerSlide(3); // Desktop view: show 3 cards
    }
  };

  // Effect to set up resize listener when component mounts
  useEffect(() => {
    updateCardsPerSlide(); // Set initial cards count
    window.addEventListener("resize", updateCardsPerSlide); // Update on resize

    return () => {
      window.removeEventListener("resize", updateCardsPerSlide); // Cleanup on unmount
    };
  }, []);

  // Go to the next testimonial slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialsData.length);
  };

  // Go to the previous testimonial slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + TestimonialsData.length) % TestimonialsData.length
    );
  };

  // Determine which testimonial cards are currently visible
  const visibleCards = [];
  for (let i = 0; i < cardsPerSlide; i++) {
    visibleCards.push(
      TestimonialsData[(currentIndex + i) % TestimonialsData.length]
    );
  }

  return (
    <div className="px-162">
      {/* Section Title */}
      <TitleComponent
        btnContnet="Their Happy Words 🤗"
        title="Our Testimonials"
        descrption="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className="Mr-TestimonialsAllCard" data-aos="zoom-in-down">
        {/* Previous Button for Wide Screens */}
        <div className="Mr-wideScreenButton">
          <button className="Mr-TestimonialsBtn" onClick={prevSlide}>
            <img
              src="/Little-learners/Testimonials/leftIcon.svg"
              alt="Previous"
            />
          </button>
        </div>

        {/* Slider Container */}
        <div className="Mr-sliderCard">
          {/* Render Visible Testimonial Cards */}
          {visibleCards.map((data, index) => (
            <OurTestimonialsCard
              key={index}
              icon={data.Image}
              title={data.Name}
              desc={data.desc}
            />
          ))}

          {/* Buttons for Mobile View */}
          <div className="Mr-mobileButton">
            <button className="Mr-TestimonialsBtn" onClick={prevSlide}>
              <img
                src="/Little-learners/Testimonials/leftIcon.svg"
                alt="Previous"
              />
            </button>

            <button className="Mr-TestimonialsBtn" onClick={nextSlide}>
              <img src="/Little-learners/Testimonials/RightIcon.svg" alt="Next" />
            </button>
          </div>
        </div>

        {/* Next Button for Wide Screens */}
        <div className="Mr-wideScreenButton">
          <button className="Mr-TestimonialsBtn" onClick={nextSlide}>
            <img src="/Little-learners/Testimonials/RightIcon.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;
