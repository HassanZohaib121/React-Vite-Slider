import { useState } from 'react'
import './style.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import img1 from '../../public/img1.png'
import img2 from '../../public/img2.jpg'
import img3 from '../../public/img3.jpg'
import img4 from '../../public/img4.jpg'
import img5 from '../../public/img5.jpg'

const slides = [
  {
    id: 1,
    className: "item ${item === 1 ? 'active' : ''}",
    image: { img1 },
    design: 'design',
    slide: 'Slider 01',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    thumbnail: 'Name Slider',
  },
  {
    id: 2,
    className: "item ${item === 2 ? 'active' : ''}",
    image: { img2 },
    design: 'design',
    slide: 'Slider 02',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    thumbnail: 'Name Slider',
  },
  {
    id: 3,
    design: 'design',
    slide: 'Slider 03',
    className: "item ${item === 3 ? 'active' : ''}",
    image: { img3 },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    thumbnail: 'Name Slider',
  },
  {
    id: 4,
    design: 'design',
    slide: 'Slider 04',
    className: "item ${item === 4 ? 'active' : ''}",
    image: { img4 },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    thumbnail: 'Name Slider',
  },
  {
    id: 5,
    design: 'design',
    slide: 'Slider 05',
    className: "item ${item === 5 ? 'active' : ''}",
    image: { img5 },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    thumbnail: 'Name Slider',
  },
]

const Slider = () => {
  let countItem = slides.length
  let [item, setItem] = useState(1)

  const next = () => {
    // clearInterval(intervalID);
    setItem(item + 1)
    if (item >= countItem) {
      setItem(1)
    }
  }
  const prev = () => {
    if (item > 1) {
      setItem(item - 1)
    } else {
      setItem(5)
    }
  }

  return (
    <>
      <div className="slider">
        <div className="list">
          <div className={`item ${item === 1 ? 'active' : ''}`}>
            <img src={img1} alt="img" />
            <div className="content">
              <p>design</p>
              <h2>Slider 01</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className={`item ${item === 2 ? 'active' : ''}`}>
            <img src={img2} alt="img2" />
            <div className="content">
              <p>design</p>
              <h2>Slider 02</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className={`item ${item === 3 ? 'active' : ''}`}>
            <img src={img3} alt="img3" />
            <div className="content">
              <p>design</p>
              <h2>Slider 03</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className={`item ${item === 4 ? 'active' : ''}`}>
            <img src={img4} alt="img4" />
            <div className="content">
              <p>design</p>
              <h2>Slider 04</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className={`item ${item === 5 ? 'active' : ''}`}>
            <img src={img5} alt="img5" />
            <div className="content">
              <p>design</p>
              <h2>Slider 05</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
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
        {/* thumbnail  */}
        <div className="thumbnail">
          <div
            className={`item ${item === 1 ? 'active' : ''}`}
            onClick={() => {
              setItem(1)
            }}
          >
            <img src={img1} alt="img1" />
            <div className="content">Name Slider</div>
          </div>
          <div
            className={`item ${item === 2 ? 'active' : ''}`}
            onClick={() => {
              setItem(2)
            }}
          >
            <img src={img2} alt="img2" />
            <div className="content">Name Slider</div>
          </div>
          <div
            className={`item ${item === 3 ? 'active' : ''}`}
            onClick={() => {
              setItem(3)
            }}
          >
            <img src={img3} alt="img3" />
            <div className="content">Name Slider</div>
          </div>
          <div
            className={`item ${item === 4 ? 'active' : ''}`}
            onClick={() => {
              setItem(4)
            }}
          >
            <img src={img4} alt="img4" />
            <div className="content">Name Slider</div>
          </div>
          <div
            className={`item ${item === 5 ? 'active' : ''}`}
            onClick={() => {
              setItem(5)
            }}
          >
            <img src={img5} alt="img5" />
            <div className="content">Name Slider</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
