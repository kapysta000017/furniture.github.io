import slider from "./slider.module.css"
import "./sliderButton.css"
import mask from "../images/contentImg/Mask.png"
import Slider from "react-slick"

export default function SliderHeader() {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section>
      <Slider {...settings} className={slider.container}>
        <div className={slider.item}>
          <img className={slider.img} src={mask}></img>
          <div className={slider.info}>
            <h2 className={slider.title}>Furniture collection</h2>
            <p className={slider.text}>
              Deep v you probably haven't heard of them banh mi synth actually
              affogato. Aesthetic lyft ethical drinking vinegar austint
            </p>
          </div>
        </div>
        <div className={slider.item}>
          <img className={slider.img} src={mask}></img>
          <div className={slider.info}>
            <h2 className={slider.title}>Furniture collection</h2>
            <p className={slider.text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ab
              tempore numquam facilis suscipit voluptas unde nulla molestias
              ullam ea.
            </p>
          </div>
        </div>
        <div className={slider.item}>
          <img className={slider.img} src={mask}></img>
          <div className={slider.info}>
            <h2 className={slider.title}>Furniture collection</h2>
            <p className={slider.text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ab
              tempore numquam facilis suscipit voluptas unde nulla molestias
              ullam ea.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  )
}
