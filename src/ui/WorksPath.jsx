import works from "./worksPath.module.css"
import page from "../images/page.svg"
import sofa from "../images/sofa.svg"
import works2 from "../images/works2.svg"
import classNames from "classnames"

export default function WorkPath() {
  return (
    <section className={works.inner}>
      <div className="container">
        <h3 className={works.infoTitle}>How it works</h3>
        <div className={works.items}>
          <div className={works.itemBox}>
            <div className={works.item}>
              <img src={page} alt="icon" />
              <h6 className={works.title}>Designer Consultation</h6>
              <p className={works.text}>
                Kinfolk scenester authentic craft beer truffaut irony
                intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                bun venmo viral cliche
              </p>
            </div>
            <div className={classNames(works.item, works.rightItem)}>
              <img src={sofa} alt="sofa" />
              <h6 className={works.title}>Production</h6>
              <p className={works.text}>
                Everyday carry actually neutra authentic kogi shabby chic
              </p>
            </div>
          </div>
          <div className={classNames(works.item, works.bottomItem)}>
            <img src={works2} alt="icon" />
            <h6 className={works.title}>Measurements</h6>
            <p className={works.text}>
              Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun
              venmo viral cliche
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
