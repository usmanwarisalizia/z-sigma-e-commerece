import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="footer-info">
                                    <h1>ZEES</h1>
                            <p>
                                <span className='d-block'>A108 Adam Street</span>
                                <span className='d-block'>NY 535022, USA</span>
                                <strong>Phone:</strong> <span className='text-dark'>+1 5589 55488 55</span>
                                <br />
                                <strong>Email:</strong> <span className='text-dark'>info@example.com</span>
                            </p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Home</a></li>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">About us</a></li>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Services</a></li>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Fabrics</a></li>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Jeans</a></li>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Electronics</a></li>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Shoes</a></li>
                                    <li><i className="fa fa-chevron-right me-2"></i> <a href="#">Dress</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer