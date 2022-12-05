import footer from "./footer.module.scss"
import classNames from "classnames"

export default function Footer() {
  return (
    <footer className="footer">
      <div className={footer.content}>
        <div className="container">
          <div className={footer.inner}>
            <div className={footer.info}>
              <h4 className={footer.title}>Contact Us</h4>
              <p className={footer.text}>
                Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
                schlitz you probably occupy
              </p>
              <a className={footer.email} href="/#">
                ouremailaddress@email.com
              </a>
              <form className={footer.form} action="">
                <input
                  className={footer.input}
                  type="email"
                  placeholder="Subscribe by email"
                />
                <button className={footer.button} type="submit">
                  Send
                </button>
              </form>
            </div>
            <ul className={footer.listSocial}>
              <li className={footer.itemSocial}>
                <a
                  className={classNames(
                    footer.linkSocialFacebook,
                    footer.linkSocial
                  )}
                  href="/#"
                >
                  Facebook
                </a>
              </li>
              <li className={footer.itemSocial}>
                <a
                  className={classNames(
                    footer.linkSocialInstagram,
                    footer.linkSocial
                  )}
                  href="/#"
                >
                  Instagram
                </a>
              </li>
              <li className={footer.itemSocial}>
                <a
                  className={classNames(
                    footer.linkSocialPinterest,
                    footer.linkSocial
                  )}
                  href="/#/#"
                >
                  Pinterest
                </a>
              </li>
              <li className={footer.itemSocial}>
                <a
                  className={classNames(
                    footer.linkSocialWhatsApp,
                    footer.linkSocial
                  )}
                  href="/#/#"
                >
                  WhatsApp
                </a>
              </li>
              <li className={footer.itemSocial}>
                <a
                  className={classNames(
                    footer.linkSocialYouTube,
                    footer.linkSocial
                  )}
                  href="/#"
                >
                  YouTube
                </a>
              </li>
            </ul>
            <nav className={footer.menu}>
              <ul>
                <li>
                  <a className={footer.link} href="/#">
                    Delivery
                  </a>
                </li>
                <li>
                  <a className={footer.link} href="/#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className={footer.link} href="/#">
                    Help
                  </a>
                </li>
                <li>
                  <a className={footer.link} href="/#">
                    More About Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={footer.copyright}>
        <p className="container">674 Gonzales Drive. Washington, PA 15301</p>
      </div>
    </footer>
  )
}
