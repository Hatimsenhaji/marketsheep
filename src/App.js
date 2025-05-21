import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sheep from "./pages/Sheep";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import Board from "./pages/smallPage/board";
import Details from "./pages/smallPage/Details";

function App() {
  return (<>
  
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sheep" element={<Sheep />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* about rout */} 
          <Route path="/board" element={<Board />} />
          {/* Details */}
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div></>
  );
}

export default App;
