import React from "react";


function Footer() {
  return (
    <footer className="bg-light pt-5">
      <div className="container">

        {/* Top Section */}
        <div className="row gy-4">

          {/* Logo + Info */}
          <div className="col-md-4">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              style={{ width: "140px" }}
              className="mb-3"
            />
            <p className="text-muted small">
              © 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Products</a></li>
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Pricing</a></li>
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Contact</a></li>
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Support Portal</a></li>
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Downloads</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Open Account</a></li>
              <li><a href="#" className="text-muted text-decoration-none d-block mb-2">Fund Transfer</a></li>
            </ul>
          </div>

          {/* Social / CTA */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark btn-sm">X</button>
              <button className="btn btn-outline-dark btn-sm">IN</button>
              <button className="btn btn-outline-dark btn-sm">YT</button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Bottom Legal Section */}
        <div className="text-muted small" style={{ lineHeight: "1.6" }}>
          <p>
            Investments in securities market are subject to market risks. Please read all documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your mobile/email with your broker for alerts.
          </p>

          <p>
            We do not provide stock tips or trading services. Beware of frauds claiming to represent us.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;