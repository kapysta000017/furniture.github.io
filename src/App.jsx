import Header from "./ui/Header"
import Footer from "./ui/Footer"
import Slider from "./ui/Slider"
import Collection from "./ui/Collection"
import "./app.scss"
import Decor from "./ui/Decor"
import WorkPath from "./ui/WorksPath"
import Gallery from "./ui/Gallery"
import Blog from "./ui/Blog"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Slider />
        <Collection />
        <Decor />
        <WorkPath />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
