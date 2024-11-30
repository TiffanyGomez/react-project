import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Home.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderData = [
    {
      category: "",
      images: [
        { src: "/images/Slides/business/slide1.jpg", alt: "Business 1" },
        { src: "/images/Slides/business/slide2.jpg", alt: "Business 2" },
        { src: "/images/Slides/business/slide3.jpg", alt: "Business 3" },
      ],
    },
    {
      category: "",
      images: [
        { src: "/images/Slides/casual/slide1.jpg", alt: "Casual 1" },
        { src: "/images/Slides/casual/slide2.jpg", alt: "Casual 2" },
        { src: "/images/Slides/casual/slide3.jpg", alt: "Casual 3" },
      ],
    },
    {
      category: "",
      images: [
        { src: "/images/Slides/sport/slide1.jpg", alt: "Sport 1" },
        { src: "/images/Slides/sport/slide2.jpg", alt: "Sport 2" },
        { src: "/images/Slides/sport/slide3.jpg", alt: "Sport 3" },
      ],
    },
    {
      category: "",
      images: [
        { src: "/images/Slides/kids/slide1.jpg", alt: "Kids 1" },
        { src: "/images/Slides/kids/slide2.jpg", alt: "Kids 2" },
        { src: "/images/Slides/kids/slide3.jpg", alt: "Kids 3" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="hero">
        <h1>Welcome to Steppy</h1>
        <p>👟 Where Each Step Becomes a New Adventure! 👟</p>
        <button>Shop Now</button>
      </section>

      <section className="slider">
        <Slider {...sliderSettings} className="hero-slider">
          {sliderData.map((slide, index) => (
            <div key={index} className="slide">
              <h2 className="category-title">{slide.category}</h2>
              <div className="slide-container">
                {slide.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="slide-item">
                    <img src={image.src} alt={image.alt} className="slider-image" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="exemple">
              <div className="bg" />
              <div className="blob" />
              <img
                src={`/images/Men/Sport/Basket/basketball${index + 1}.png`}
                alt={`Shoe ${index + 1}`}
                className="product-image"
              />
              <h3 className="product-title">Stylish Shoe {index + 1}</h3>
              <p className="product-price">$49.99</p>
              <button className="product-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
