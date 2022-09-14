import React, { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import CommonNavbar from "../CommonNavbar";

import line from "../../images/line.png";

import "./portfolio.css";
import Footer from "../Footer";
import { getLogos } from "../../actions/logos";

const FilterSection = React.lazy(() => import("./FilterSection"));

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogos());
  }, [dispatch]);
  return (
    <div className="portfolio_page">
      <Container>
        <CommonNavbar />
      </Container>
      <div className="banner_wrapper">
        <Container>
          <div className="banner_content">
            <h1 className="banner_heading largeFont">
              Smell the Change, Act on the Change, Enjoy the Change
            </h1>
            <p className="banner_desc extraSmallFont">
              Over time, we have made great investments. Take a look at our
              portfolio companies. Your success is what makes us successful
              investors!
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <FilterSection />
        </Suspense>
      </Container>
      <div className="white_space"></div>
      <div className="white_space"></div>
      <Container>
        <div className="section_heading">
          <span>
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p>Experience</p>
        </div>
        <p className="section_title mediumFont">
          We have transformed industries and created new ones.
        </p>
        <Row className="py-5">
          <Col xs={12} md={6} lg={3}>
            <div className="experience_count">100+</div>
            <p className="experience_count_text">active portfolio companies</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-5 mt-md-0">
            <div className="experience_count">₹25M+</div>
            <p className="experience_count_text">under management</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-5 mt-lg-0">
            <div className="experience_count">10</div>
            <p className="experience_count_text">IPOs</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-5 mt-lg-0">
            <div className="experience_count">4</div>
            <p className="experience_count_text">mergers and acquisitions</p>
          </Col>
        </Row>
      </Container>
      <div className="white_space"></div>
      <div className="white_space"></div>
      <Footer />
    </div>
  );
}

export default Index;
