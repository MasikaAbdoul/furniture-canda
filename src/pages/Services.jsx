import couch from '../assets/images/couch.png';

import { Link } from 'react-router-dom';

import Whychooseus from "../components/Whychooseus";
import Product from '../components/Product';
import Testimonials from '../components/Testimonials';

function Services() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Services</h1>
                                <p className="mb-4">
                                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                    velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                </p>
                                <p>
                                    <Link to="/shop" className="btn btn-secondary me-2">
                                        Shop Now
                                    </Link>
                                    <a href="#" className="btn btn-white-outline">
                                        Explore
                                    </a>
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
            <Whychooseus/>
            <Product />
            <Testimonials />
        </>
    )
}

export default Services;