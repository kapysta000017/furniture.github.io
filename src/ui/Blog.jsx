import blog from "./blog.module.css"
import img from "../images/blog/0.jpg"

export default function Blog() {
  return (
    <section>
      <div className="container">
        <h3 className={blog.title}>More inspiration ideas in our blog</h3>
        <div className={blog.items}>
          <div className={blog.item}>
            <a href="">
              <img src={img} alt="" />
            </a>
            <div className={blog.links}>
              <span className={blog.data}>March 12, 2022</span>|
              <a className={blog.author} href="">
                by Finnagan Morningstar
              </a>
              |
              <a className={blog.theme} href="">
                Dining room interior
              </a>
            </div>
            <a href="">
              <h4 className={blog.itemTitle}>
                Red selfies edison bulb four dollar toast humblebrag
              </h4>
            </a>
          </div>
          <div className={blog.item}>
            <a href="">
              <img src={img} alt="" />
            </a>
            <div className={blog.links}>
              <span className={blog.data}>September 28,2022</span>|
              <a className={blog.author} href="">
                by Ann Summers
              </a>
              |
              <a className={blog.theme} href="">
                Inrerior
              </a>
            </div>
            <a href="">
              <h4 className={blog.itemTitle}>
                Listicle actually selvage activated charcoal for the drinking
                vinegar
              </h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
