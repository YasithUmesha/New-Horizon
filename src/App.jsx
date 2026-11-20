import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { CollegeVisa, SchoolingVisa } from "./Pages/ServiceDetail";
import EnglishTests from "./Pages/EnglishTests";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/collegevisa" element={<CollegeVisa />} />
        <Route path="/schoolingvisa" element={<SchoolingVisa />} />
        <Route path="/english-tests" element={<EnglishTests />} />
      </Routes>
    </Router>
  );
};

export default App;
