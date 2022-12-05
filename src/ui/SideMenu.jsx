import closeSvg from "../images/close.svg"
import logo from "../images/logo.png"
import side from "./sideMenu.module.css"
import img from "../images/chair.jpg"

export default function SideMenu({ toggleSetSideMenu }) {
  return (
    <div className={side.inner}>
      <button
        className={side.closeButton}
        onClick={() => toggleSetSideMenu((state) => !state)}
      >
        <img className={side.closeSvg} src={closeSvg} alt="close_menu" />
      </button>
      <div className={side.content}>
        <a href="">
          <img className={side.logo} src={logo} alt="logo" />
        </a>
        <h4 className={side.title}>Furniture for life</h4>
        <p className={side.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, et.
          Iusto illum numquam sed? Facere molestiae natus earum nostrum, dicta
          nemo quis saepe incidunt. Enim dicta expedita temporibus fugit labore?
        </p>
        <img className={side.img} src={img} alt="img" />
      </div>
    </div>
  )
}
