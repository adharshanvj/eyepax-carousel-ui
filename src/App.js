import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselSlide from "./components/CarouselSlide";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2>Eyepax Carousel Slider</h2>
      <nav className="navbar navbar-expand-sm navbar-sm bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Carousels
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/list" className="nav-link">
                Carousels List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <CarouselSlide slides="5" />
      {/* <Routes>
        <Route path="/" exact element={<CarouselList />} />
        <Route path="/edit/:id" element={<EditCarousel />} />
      </Routes> */}
    </div>
  );
}

export default App;
