import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How AirBnB works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb luxe</p>
      </div>

      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Combating discrimination</p>
      </div>

      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">HOSTING</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>

      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>AirCover</p>
        <p>Supporting people with disabilities</p>
        <p>Cancellation options</p>
        <p>Our covid-19 response</p>
      </div>
    </div>
  );
}

export default Footer;
