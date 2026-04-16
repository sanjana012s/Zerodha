import React from 'react';
function Hero() {
  return (
    <div className="bg-light py-5">
      <div className="container text-center">

        {/* Image */}
        <img
          src="/media/images/homeHero.png"
          alt="Hero"
          className="img-fluid mb-5"
          style={{ maxWidth: "1000px" }}
        />

        {/* Heading */}
        <h1 className="fw-bold display-5 mb-3">
          Invest in everything
        </h1>

        {/* Description */}
        <p className="text-muted fs-5 mb-4">
          Online platform to invest in stocks, derivatives,
          mutual funds, and more
        </p>

        {/* Button */}
        <button className="btn btn-primary btn-lg px-4">
          Signup Now
        </button>

      </div>
    </div>
  );
}

export default Hero;