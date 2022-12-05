import collection from "./collection.module.css"
import img from "../images/contentImg/collection.jpg"
import img1 from "../images/contentImg/collection1.jpg"

export default function Collection() {
  return (
    <section className={collection.fluid}>
      <div className="container-fluid">
        <h3 className={collection.title}>Furniture new collection</h3>
        <p className={collection.text}>
          Deep v you probably haven't heard of them banh mi synth actually
          affogato. Aesthetic lyft ethical drinking vinegar austint
        </p>
        <div className={collection.collection}>
          <a className={collection.item} href="/#">
            <img className={collection.images} src={img} alt="" />
            <div className={collection.info}>
              <h6 className={collection.infoTitle}>Truffaut literally trust</h6>
              <p className={collection.infoText}>
                Living room furntiture | Chair
              </p>
            </div>
          </a>
          <a className={collection.item} href="/#">
            <img className={collection.images} src={img1} alt="" />
            <div className={collection.info}>
              <h6 className={collection.infoTitle}>Truffaut literally trust</h6>
              <p className={collection.infoText}>
                Living room furntiture | Chair
              </p>
            </div>
          </a>
          <a className={collection.item} href="/#">
            <img className={collection.images} src={img} alt="" />
            <div className={collection.info}>
              <h6 className={collection.infoTitle}>Truffaut literally trust</h6>
              <p className={collection.infoText}>
                Living room furntiture | Chair
              </p>
            </div>
          </a>
          <a className={collection.item} href="/#">
            <img className={collection.images} src={img1} alt="" />
            <div className={collection.info}>
              <h6 className={collection.infoTitle}>Truffaut literally trust</h6>
              <p className={collection.infoText}>
                Living room furntiture | Chair
              </p>
            </div>
          </a>
          <a className={collection.item} href="/#">
            <img className={collection.images} src={img} alt="" />
            <div className={collection.info}>
              <h6 className={collection.infoTitle}>Truffaut literally trust</h6>
              <p className={collection.infoText}>
                Living room furntiture | Chair
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
