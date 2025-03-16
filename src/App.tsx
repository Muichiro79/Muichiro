import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Component/Header";
import MyProject from "./Pages/MyProject";
import Footer from "./Component/Footer";
import CustomCursor from "./CustomCursor";

function App() {
  return (
    <Router>
      <Header />
      <CustomCursor />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<MyProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
