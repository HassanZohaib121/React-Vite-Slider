import { useEffect, useState } from "react";
import "./style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "../../img1.png",
    design: "design",
    slide: "Slider 01",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    thumbnail: "Name Slider",
  },
  {
    id: 2,
    image: "../../img2.jpg",
    design: "design",
    slide: "Slider 02",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    thumbnail: "Name Slider",
  },
  {
    id: 3,
    design: "design",
    slide: "Slider 03",
    image: "../../img3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    thumbnail: "Name Slider",
  },
  {
    id: 4,
    design: "design",
    slide: "Slider 04",
    image: "../../img4.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    thumbnail: "Name Slider",
  },
  {
    id: 5,
    design: "design",
    slide: "Slider 05",
    image: "../../img5.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    thumbnail: "Name Slider",
  },
];
const thumbnails = [
  {
    id: 1,
    img: "../../img1.png",
    text: "Name Slider",
    tClass: "thumbnail",
  },
  {
    id: 2,
    img: "../../img2.jpg",
    text: "Name Slider",
    tClass: "thumbnail",
  },
  {
    id: 3,
    img: "../../img3.jpg",
    text: "Name Slider",
    tClass: "thumbnail",
  },
  {
    id: 4,
    img: "../../img4.jpg",
    text: "Name Slider",
    tClass: "thumbnail",
  },
  {
    id: 5,
    img: "../../img5.jpg",
    text: "Name Slider",
    tClass: "thumbnail",
  },
];

const MapSlider = () => {
  let countItem = slides.length;
  let [item, setItem] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setItem((prevItem) => (prevItem >= countItem ? 1 : prevItem + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [countItem]);

  const next = () => {
    setItem((prevItem) => (prevItem >= countItem ? 1 : prevItem + 1));
  };

  const prev = () => {
    setItem((prevItem) => (prevItem <= 1 ? countItem : prevItem - 1));
  };

  return (
    <>
      <div className="slider">
        <div className="list">
          {slides.map(({ id, image, design, slide, text }) => (
            <div className={`item ${item === id ? "active" : ""}`} key={id}>
              <img src={image} alt="img" />
              <div className="content">
                <p>{design}</p>
                <h2>{slide}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="arrows">
          <button onClick={prev}>
            <FaArrowLeft />
          </button>
          <button onClick={next}>
            <FaArrowRight />
          </button>
        </div>
        {/* Thumbnail */}
        <div className="thumbnail">
          {thumbnails.map(({ id, img, text }) => (
            <div
              key={id}
              className={`item ${item === id ? "active" : ""}`}
              onClick={() => setItem(id)}
            >
              <img src={img} alt="img" />
              <div className="content">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MapSlider;
