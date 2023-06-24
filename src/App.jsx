import './App.css'
import './assets/scss/style.scss'
import './assets/js/custom'
import './assets/js/tiny-slider'
import './assets/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

import sofa from './assets/images/sofa.png';
import envelope from './assets/images/envelope-outline.svg';
import user from './assets/images/user.svg';
import cart from './assets/images/cart.svg';
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Thankyou from './pages/Thankyou'

function App() {

  return (
    <Router>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Furni<span>.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/aboutus">
                  About us
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link className="nav-link" to="#">
                  <img src={user} />
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/cart">
                  <img src={cart} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/thankyou' element={<Thankyou />}/>
      </Routes>
      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img">
            <img src={sofa} alt="Image" className="img-fluid" />
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img
                      src={envelope}
                      alt="Image"
                      className="img-fluid"
                    />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>
                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <Link to="/" className="footer-logo">
                  Furni<span>.</span>
                </Link>
              </div>
              <p className="mb-4">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
                nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                velit imperdiet dolor tempor tristique. Pellentesque habitant
              </p>
              <ul className="list-unstyled custom-social">
                <li>
                  <Link to="#">
                    <span className="fa fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-brands fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-brands fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-brands fa-linkedin" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/aboutus">About us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Support</Link>
                    </li>
                    <li>
                      <Link to="#">Knowledge base</Link>
                    </li>
                    <li>
                      <Link to="#">Live chat</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Jobs</Link>
                    </li>
                    <li>
                      <Link to="#">Our team</Link>
                    </li>
                    <li>
                      <Link to="#">Leadership</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Nordic Chair</Link>
                    </li>
                    <li>
                      <Link to="#">Kruzo Aero</Link>
                    </li>
                    <li>
                      <Link to="#">Ergonomic Chair</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright ©. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <Link to="#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </Router>
  )
}

export default App
