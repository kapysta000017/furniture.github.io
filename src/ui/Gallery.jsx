import gallery from "./gallery.module.css"
import jpg0 from "../images/gallery/0.jpg"
import jpg1 from "../images/gallery/1.jpg"
import jpg2 from "../images/gallery/2.jpg"
import jpg3 from "../images/gallery/3.jpg"
import { useState } from "react"

export default function Gallery() {
  const [images, setImages] = useState([jpg3, jpg2, jpg1, jpg0, jpg2])
  return (
    <div className={gallery.container}>
      <div className="container-fluid">
        <div className={gallery.buttons}>
          <button
            className={gallery.btn}
            onClick={(e) => setImages((state) => [...state])}
          >
            Bedroom furniture
          </button>
          <button
            className={gallery.btn}
            onClick={(e) => setImages((state) => [...state])}
          >
            Living room furniture
          </button>
          <button
            className={gallery.btn}
            onClick={(e) => setImages((state) => [...state])}
          >
            Office furniture
          </button>
          <button
            className={gallery.btn}
            onClick={(e) => setImages((state) => [...state])}
          >
            Dining room futniture
          </button>
          <button
            className={gallery.btn}
            onClick={(e) => setImages((state) => [...state])}
          >
            Chair
          </button>
        </div>
        <div className={gallery.items}>
          {images.map((img) => (
            <a href="/#" className={gallery.item} key={Math.random()}>
              <img src={img} alt="images" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
