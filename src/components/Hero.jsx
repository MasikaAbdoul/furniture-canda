import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import couch from '../assets/images/couch.png'

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>
                                Modern Interior <span clsas="d-block">Design Studio</span>
                            </h1>
                            <p className="mb-4">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                            <p>
                                <Link to="/shop" className="btn btn-secondary me-2">
                                    Shop Now
                                </Link>
                                <Link to="/" className="btn btn-white-outline">
                                    Explore
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src={couch} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero;