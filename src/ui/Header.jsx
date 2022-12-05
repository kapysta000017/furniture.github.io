import header from "./header.module.css"
import logo from "../images/logo.png"
import iconMenu from "../images/icon_menu.svg"
import SideMenu from "./SideMenu"
import { useState } from "react"
import classNames from "classnames"

export default function Header() {
  const [toggleSideMenu, setToggleSideMenu] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <div className={header.inner}>
          <nav
            className={classNames(header.menu, toggleMenu && header.menuOpen)}
          >
            <ul className={header.list}>
              <li className={header.item}>
                <a className={header.link} href="">
                  About
                </a>
              </li>
              <li className={header.item}>
                <a className={header.link} href="">
                  Gallery
                </a>
              </li>
            </ul>
          </nav>
          <a className={header.logo} href="#">
            <img src={logo} alt="logo" />
          </a>
          <nav
            className={classNames(header.menu, toggleMenu && header.menuOpen)}
          >
            <ul className={header.list}>
              <li className={header.item}>
                <a className={header.link} href="">
                  Blog
                </a>
              </li>
              <li className={header.item}>
                <a className={header.link} href="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={header.buttonMenu}
            onClick={() => setToggleMenu((state) => !state)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className={header.button}>
            <img
              src={iconMenu}
              alt="icon_menu"
              onClick={() => setToggleSideMenu((state) => !state)}
            />
          </button>
          {toggleSideMenu && <SideMenu toggleSetSideMenu={setToggleSideMenu} />}
        </div>
      </div>
    </header>
  )
}
