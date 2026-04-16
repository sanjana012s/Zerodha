import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center hero-header">
          <h1>
            We pioneered the discount broking model in India
          </h1>
          <p className="hero-sub">
            Now, we are breaking ground with our technology.
          </p>
        </div>

        {/* Content */}
        <div className="row hero-box">

          <div className="col-lg-6 col-md-12">
            <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
            </p>
            <p>
           Today, our disruptive pricing models and in-house technology have
          made us the biggest stock broker in India.
            </p>
            <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
            </p>
          </div>

          <div className="col-lg-6 col-md-12">
            <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a href="/" className="hero-link">
                Rainmatter
              </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.

            </p>
            <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;