import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <button type="button">Track Tickets</button>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <button type="button">Track account opening</button>
          <button type="button">Track segment activation</button>
          <button type="button">Intraday margins</button>
          <button type="button">Kite user manual</button>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <button type="button">Current Takeovers and Delisting - January 2024</button>
            </li>
            <li>
              <button type="button">Latest Intraday leverages - MIS & CO</button>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;