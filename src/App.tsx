import Footer from "./components/Footer"
import IndustriesWeServe from "./components/layout/industriesWeServe"
import KeyFeature from "./components/layout/keyfeature"
import UseOfBackgroundRemover from "./components/layout/useOfbackgroundRemover"
import Navbar from "./components/Navbar"
import Faq from "./pages/Faq"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <KeyFeature />
      <UseOfBackgroundRemover />
      <IndustriesWeServe />
      <Faq />
      <Footer />
    </>
  )
}

export default App
