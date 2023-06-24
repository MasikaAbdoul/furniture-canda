import { Link } from "react-router-dom";

import product_1 from '../assets/images/product-1.png';
import product_2 from '../assets/images/product-2.png';
import product_3 from '../assets/images/product-3.png';

import cross from '../assets/images/cross.svg';

function Shop() {
    return (
        <>
            {/* Start Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Shop</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {/* Start Column 1 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src={product_3}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">&euro;50.00</strong>
                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src={product_1}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">&euro;50.00</strong>
                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 2 */}
                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src={product_2}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Kruzo Aero Chair</h3>
                                <strong className="product-price">&euro;78.00</strong>
                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 3 */}
                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src={product_3}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Ergonomic Chair</h3>
                                <strong className="product-price">&euro;43.00</strong>
                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 4 */}
                        {/* Start Column 1 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src={product_3}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">&euro;50.00</strong>
                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src={product_1}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">&euro;50.00</strong>
                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 2 */}
                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src={product_2}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Kruzo Aero Chair</h3>
                                <strong className="product-price">&euro;78.00</strong>
                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 3 */}
                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img
                                    src={product_3}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Ergonomic Chair</h3>
                                <strong className="product-price">&euro;43.00</strong>
                                <span className="icon-cross">
                                    <img src={cross} className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 4 */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Shop;