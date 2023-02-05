import "./styles.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";

import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <About />
      <Nav />
      <Experience />

      <Contact />
      <Footer />
    </>
  );
};
export default App;
