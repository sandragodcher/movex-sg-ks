import React from 'react';
import Popular from './Popular';

function Footer() {
  return (
    <>
      <footer>
        <section className="footer blue">
          <div className="container">
            <div className="row">
              <div className="footer col-sm-4">
                <h6 className="title">Menu</h6>
                <ul>
                  <li>
                    <a href="/">
                      <h6>Home</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/page-categories">
                      <h6>Categories</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/page-apropos">
                      <h6>About</h6>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer col-sm-4">
                <h6 className="title">Popular</h6>
                <Popular />
              </div>
              <div className="footer col-sm-4">
                <h6 className="title">Newsletter</h6>
                <div className="newsletter">
                  <input
                    className="newsletter_input"
                    type="text"
                    name=""
                    placeholder="Email"
                  />
                  <a
                    href="#"
                    className="newsletter_btn">
                    Subscribe
                  </a>
                </div>
                <h6 className="follow">Follow us</h6>
                <div className="row">
                  <div className="social col-1 mx-2">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="social col-1 mx-2">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                  <div className="social col-1 mx-2">
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <p>©Copyright 2023 Movex</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
