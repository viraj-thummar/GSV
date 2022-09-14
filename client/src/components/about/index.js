import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";

import CommonNavbar from "../CommonNavbar";
import Footer from "../Footer";

import line from "../../images/line.png";
import _about from "../../images/_about.png";
import DpBack from "../../images/DP-back.svg";
import bondImg from "../../images/bond.png";
import networkMap from "../../images/networkMap.png";

import "./about.css";
import { Desirebilities, whatWeDo } from "./DesirebilityData";

function index() {
  const bondCarousel = [
    {
      title: "We Founder Circle",
      description:
        "We Founder Circle is a digital-first, community-based investment platform with community members who are a mix of corporate executives, founders, and Investors who have been part of the start-up ecosystem. Gaurav Singhvi is the Co-Founder of We Founder Circle.",
    },
    {
      title: "Evolvex",
      description:
        "A ‘We Founder Circle’ Accelerator that is designed to support and guide early-stage, growth-driven companies to accelerate progress. It has an extensive network of seasoned mentors and exceptional entrepreneurs, Gaurav Singhvi extends his mentorship capabilities to this EvolveX and is also its Director.",
    },
    {
      title: "Gaya Global Connections",
      description:
        "Gaurav Singhvi is the Director of this Entertainment and Events company. The Financial Super Market Gaurav Singhvi is the Co-Founder of this India-focused advisory services firm.",
    },
    {
      title: "Surat Golf Club",
      description:
        "Gaurav Singhvi has a 50% stake in this Surat Golf Club. He is also the Director here.",
    },
    {
      title: "The Financial Super Market",
      description:
        "Gaurav Singhvi is the Co-Founder of this India-focused advisory services firm.",
    },
    {
      title: "ُProvyz",
      description:
        "Gaurav Singhvi is the Co-Founder of Provyz, a value-added collaborative workspace built to unlock possibilities.",
    },
    {
      title: "Climate Detox",
      description:
        "Started as a mission to support UN Sustainable Development Goals, Climate Detox was founded by Gaurav Singhvi",
    },
  ];
  return (
    <div className="about_page">
      <Container>
        <CommonNavbar />
      </Container>
      <div className="banner_wrapper">
        <Container>
          <div className="banner_content">
            <h1 className="banner_heading largeFont">
              We help to grow companies
            </h1>
            <p className="banner_desc extraSmallFont">
              If you are thinking about growing your start-up to the next level,
              you are at the right place.
            </p>
          </div>
        </Container>
      </div>
      <div className="white_space"></div>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="section_heading">
              <span>
                <img className="img-fluid" src={line} alt="line" />
              </span>
              <p>About GSV</p>
            </div>
            <p className="section_title mediumFont">About GSV Section</p>
            <p className="section_para extraSmallFont">
              Most early-stage companies go through growing pains, especially
              when it comes to funding and business development. That is exactly
              where Gaurav Singhvi Ventures (GSV), a family office investment
              entity, comes in – hand-holding your company through this
              difficult phase through to actual growth. We are a funding
              platform for budding entrepreneurs for their start-up ventures.
            </p>
            <p className="section_para extraSmallFont">
              As of now, GSV has invested in 95 promising start-ups across
              India. Get in touch with us if you are looking at seed funding,
              community building, networking, mentorship, fundraising, and
              entrepreneurship.
            </p>
            <Row className="py-4">
              <Col xs={12} md={6} lg={12}>
                <div className="subTitle_wrapper">
                  <p className="section_subTitle smallFont">Our mission</p>
                  <p className="section_para extraSmallFont">
                    Co-create success – yours and ours.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={12}>
                <div className="subTitle_wrapper">
                  <p className="section_subTitle smallFont">Our vision</p>
                  <p className="section_para extraSmallFont">
                    To make India a vibrant start-up nation.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={0} lg={1}></Col>
          <Col md={12} lg={5}>
            <div className="img_box">
              <img className="img-fluid" src={_about} alt="about" />
              <img className="img-fluid dp_back" src={DpBack} alt="about" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="white_space"></div>
      <div className="wrapper_bg">
        <div className="white_space"></div>
        <Container>
          <div className="section_heading">
            <span>
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p>Our Values</p>
          </div>
          <p className="section_title mediumFont">Our Desirebility</p>
          <Row>
            {Desirebilities?.map((desirebility, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="pt-5">
                <div className="desirebility_icon">
                  <img
                    className="img-fluid"
                    src={desirebility.icon}
                    alt="desirebilityIcon"
                  />
                </div>
                <p className="desirebility_title smallFont">
                  {desirebility.title}
                </p>
                <p className="desirebility_description">
                  {desirebility.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="white_space"></div>
        <div className="white_space"></div>

        <Container>
          <div className="section_heading">
            <span>
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p>Bond</p>
          </div>
          <p className="section_title mediumFont">My Bond with Startups</p>
          <Carousel>
            {bondCarousel?.map((bond, index) => (
              <Carousel.Item key={index}>
                <Row className="py-5">
                  <Col lg={6} className="pt-0 pt-lg-4">
                    <Carousel.Caption className="carousel_caption">
                      <h3 className="smallFont">{bond.title}</h3>
                      <p className="extraSmallFont">{bond.description}</p>
                    </Carousel.Caption>
                  </Col>
                  <Col lg={6} className="pt-5 pt-lg-0">
                    <img className="img-fluid" src={bondImg} alt="bondImage" />
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <div className="white_space"></div>
      </div>
      <div className="white_space"></div>
      <Container>
        <div className="section_heading">
          <span>
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p>what we do</p>
        </div>
        <p className="section_title mediumFont">what we do</p>
        <Row>
          {whatWeDo?.map((item, index) => (
            <Col key={index} md={6} className="pt-5">
              <p className="section_subTitle smallFont">{item.title}</p>
              <p className="section_para extraSmallFont">{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="white_space"></div>
      <div className="white_space"></div>
      <Container>
        <Row>
          <Col lg={5} className="d-flex align-items-center">
            <div>
              <div className="section_heading">
                <span>
                  <img className="img-fluid" src={line} alt="line" />
                </span>
                <p>My Network</p>
              </div>
              <p className="section_title mediumFont">
                Our Presence across the World
              </p>
              <p className="section_para extraSmallFont">
                Apart from the Indian subcontinent, we have branches in a few
                other places across the globe.
              </p>
            </div>
          </Col>
          <Col lg={7}>
            <img className="img-fluid" src={networkMap} alt="Network" />
          </Col>
        </Row>
      </Container>
      <div className="white_space"></div>
      <div className="white_space"></div>
      <Footer />
    </div>
  );
}

export default index;
