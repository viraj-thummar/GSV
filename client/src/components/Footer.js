import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../images/navbarLogos/logo.svg";
import Mail from "../images/mail.svg";
import MapPin from "../images/map-pin.svg";
import Phone from "../images/phone.svg";

function Footer() {
  return (
    <div className="_footer">
      <Container>
        <div className="footer_container">
          <Row>
            <Col sm={12} md={4} className="mt-5">
              <img className="img-fluid" src={logo} alt="logo" />
            </Col>
            <Col sm={12} md={4} className="mt-5 mb-0 mb-md-3">
              <p className="footer_heading">OUR OFFICE</p>
              <p className="footer_para">
                The Financial Supermarket Tower 3rd Floor, Behind Rushabh Petrol
                Pump, Near Singapuri ni Wadi, Ring Rd, Surat, Gujarat 395002
              </p>
              <div className="d-flex align-items-center mt-3">
                <img className="img-fluid" src={MapPin} alt="map-pin" />
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/BHUBBqB9RL3asveY7"
                >
                  <p className="footer_para ps-3">View our Location</p>
                </a>
              </div>
            </Col>
            <Col sm={12} md={4} className="mt-5 mb-0 mb-md-3 last_col">
              <p className="footer_heading">CONTACT US</p>
              <div className="d-flex align-items-center">
                <img className="img-fluid" src={Mail} alt="mail" />
                <p className="footer_para ps-3">hrgsv@gmail.com</p>
              </div>
              <div className="d-flex align-items-center mt-3">
                <img className="img-fluid" src={Phone} alt="phone" />
                <p className="footer_para ps-3">0261 4003080</p>
              </div>
            </Col>
          </Row>
          <hr style={{ borderTop: "1px solid white", opacity: "1" }} />
          <p className="text-center mb-3 mb-md-0">
            ©2022 Gaurav Singhvi Ventures | All rights reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
