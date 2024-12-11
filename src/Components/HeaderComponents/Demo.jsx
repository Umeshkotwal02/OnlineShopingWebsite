import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../styles/footer.css"
import KapoorDesignStudio from '../pages/KapoorDesignStudio';
import Map from '../pages/Map';


const Footer = () => {
  return (
    <Container fluid className='footer-background'>
      <Row >
        <div className="py-4">
          <div className="row g-4">
            {/* Company Section */}
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              <h3 className="h5 mb-3">Company</h3>
              <ul className="list-unstyled">
                <li><a className="footer-link" href="/privancypolicy">Privacy Policy</a></li>
                <li><a className="footer-link" href="/contact-us">Contact Us</a></li>
                <li><a className="footer-link" href="/about-us">About Us</a></li>
                <li><a className="footer-link" href="/term-and-condition">Terms &amp; Conditions</a></li>
                <li><a className="footer-link" href="/return-cancellation">Refunds/Cancellations</a></li>
                <li><a className="footer-link" href="/delete-account">Delete Account</a></li>
              </ul>
            </div>

            {/* Information Section */}
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              <h3 className="h5 mb-3">Information</h3>
              <ul className="list-unstyled">
                <li><a className="footer-link" href="/blog">Blog/Articles</a></li>
                <li><a className="footer-link" href="/subscribe-new-letter">Subscribe to Newsletter</a></li>
                <li><a className="footer-link" href="/affiliate-program">Affiliate Program</a></li>
                <li><a className="footer-link" href="/faqs">FAQ's</a></li>
                <li><a className="footer-link" href="/franchise">Franchise</a></li>
              </ul>
            </div>

            {/* My Account Section */}
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              <h3 className="h5 mb-3">My Account</h3>
              <ul className="list-unstyled">
                <li><button className="footer-link btn btn-link">Login</button></li>
                <li><button className="footer-link btn btn-link">Shopping Bag</button></li>
                <li><button className="footer-link btn btn-link" href="/wishlist">Wishlist</button></li>
              </ul>
            </div>

            {/* Social Section */}
            <div className="col-12 col-sm-6 col-md-3 col-lg-2">
              <h3 className="h5 mb-3">Social</h3>
              <ul className="list-unstyled">
                <li><a className="footer-link" href="https://www.facebook.com/KAPOORLEHENGASAREE" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a className="footer-link" href="https://www.instagram.com/kapoorlehengasaree/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a className="footer-link" href="https://www.youtube.com/channel/UCoybOj2H8uV--DpKcaumqlw" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              </ul>
            </div>

            {/* Payment & Stay in Touch Section */}
            <div className="col-12 col-md-8 col-lg-4">
              <h3 className="h5 mb-3">Safe & Secure Payment</h3>
              <ul className="d-flex flex-wrap gap-2 list-unstyled mb-4">
                <li><a href="/"><img src="assets/images/visa.png" alt="Visa" className="img-fluid" loading="lazy" /></a></li>
                <li><a href="/"><img src="assets/images/rupay.png" alt="Rupay" className="img-fluid" loading="lazy" /></a></li>
                <li><a href="/"><img src="assets/images/upi.png" alt="UPI" className="img-fluid" loading="lazy" /></a></li>
                <li><a href="/"><img src="assets/images/amazon.png" alt="Amazon" className="img-fluid" loading="lazy" /></a></li>
                <li><a href="/"><img src="assets/images/paypal.png" alt="PayPal" className="img-fluid" loading="lazy" /></a></li>
                <li><a href="/"><img src="assets/images/paytm.png" alt="PayTM" className="img-fluid" loading="lazy" /></a></li>
              </ul>

              <h3 className="h5 mb-3">Stay in Touch</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Type your email here"
                    className="bg-dark text-white placeholder-white p-2"
                  />

                </div>
                <button type="submit" className="border p-2 ps-4 pe-4 " style={{ backgroundColor: "#E9B159" }}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </Row>


      {/* last Image Design */}
      <Row>
        <div className="w-100 mx-auto">
          <img
            src="/assets/images/Footer-img/footer-elem.png"
            className="img-fluid w-100"
            alt="Footer Element"
            loading="lazy"
          />
        </div>
      </Row>
    </Container >
  );
}

export default Footer;
