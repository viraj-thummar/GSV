import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import heroFirst from "../../images/hero/hero-1.png";
import heroSecond from "../../images/hero/hero-2.png";
import heroThird from "../../images/hero/hero-3.png";
import hero1mob from "../../images/hero/hero1mob.png";
import hero2mob from "../../images/hero/hero2mob.png";
import hero3mob from "../../images/hero/hero3mob.png";
import line from "../../images/line.png";
import about from "../../images/about.png";
import DpBack from "../../images/DP-back.svg";
import rightArror from "../../images/arrow-right.svg";
import Footer from "../Footer";
import CommonNavbar from "../CommonNavbar";
import CommonCarousel from "../CommonCarousel";
import { getLogos } from "../../actions/logos";
import { getPosts } from "../../actions/posts";
import BlogArticle from "../insight/BlogArticle";

import "./home.css";
import PortfolioLogos from "./PortfolioLogos";

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogos());
    dispatch(getPosts());
  }, [dispatch]);

  const navigate = useNavigate();
  const handlePortfolio = (event) => {
    event.preventDefault();
    navigate("../portfolio");
  };

  const breakpoints = {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  const slides = [
    {
      logo: "/gsv_assets/affliations/wfc.png",
      // title: "Co-Founder: - We Founder Circle",
      description:
        "Co-Founded by Gaurav Singhvi, WeFounderCircle is India’s #1 network of 4200+ Angel investors and Founders. WFC has so far made 60+ deals and has a presence in 30+ countries. WFC achieved this feat within 20 months from its inception.",
    },
    {
      logo: "/gsv_assets/affliations/tfs.png",
      // title: "Founder: - The Financial Supermarket",
      description:
        "Founded by Gaurav Singhvi, “The Financial Supermarket” is a360° financial advisory that operates PAN-India and specializes in areas such as Debt Syndication, Equity Financing that includes Investment Banking, SME & Mainboard IPO, Company Law Advisory & Management Consultancy. ",
    },
    {
      logo: "/gsv_assets/affliations/cc.png",
      // title: "National Director: - Corporate Connections",
      description:
        "CorporateConnections®(CC) is a global community where leaders connect. Gaurav Singhvi holds Master Franchise for CC in India, Nepal, and Sri Lanka. He is also the National Director of the community as well as the President of the Global Franchise Advisory Board. CC has 19 chapters in 16 cities in India and a combined membership of300+ corporate leaders as members.",
    },
    {
      logo: "/gsv_assets/affliations/bni.png",
      // title: "Executive Director: - BNI",
      description:
        "BNI is the largest business networking organization in the world. Gaurav Singhvi is the Executive Director of the Greater Surat chapter. With 1865+ members, BNI Surat is the fastest growing chapter in terms of member count in 1296 regions and the fastest growing region in the world (out of the 74 countries where BNI operates).",
    },
    {
      logo: "/gsv_assets/affliations/tab.png",
      // title: "Co-Founder: - The Amore Banquet",
      description:
        "'The Amore' is one of the most sought-after banqueting facilities in Surat and was co-founded by Gaurav Singhvi. It provides an elegant and superior banqueting space that caters to varied reqirements of clients.",
    },
    {
      logo: "/gsv_assets/affliations/provyz.png",
      // title: "Co-Founder: - Provyz Coworking Space",
      description:
        "Co-Founded by Gaurav Singhvi, Provyz is a value-added collaborative workspace. It is a capex-less, friendly and safe workspace, fully equipped with state-of-the-art facilities.",
    },
  ];
  return (
    <div className="home_Page">
      <CommonNavbar />
      <div className="banner_carousel">
        <Carousel>
          <Carousel.Item>
            <div className="hero_img_section">
              <img
                className="d-none d-md-block w-100"
                src={heroFirst}
                alt="First slide"
              />
              <img
                className="d-sm-block d-md-none w-100"
                src={hero1mob}
                alt="First slide"
              />
              <div className="img_overlay"></div>
            </div>

            <div className="__box">
              <Container>
                <Carousel.Caption>
                  <h3 className="slide_heading extraLargeFont">
                    Either You Innovate or Invest in Innovation
                  </h3>
                </Carousel.Caption>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="hero_img_section">
              <img
                className="d-none d-md-block w-100"
                src={heroSecond}
                alt="Second slide"
              />
              <img
                className="d-sm-block d-md-none w-100"
                src={hero2mob}
                alt="First slide"
              />
              <div className="img_overlay"></div>
            </div>

            <div className="__box">
              <Container>
                <Carousel.Caption>
                  <h3 className="slide_heading extraLargeFont">
                    Focus Makes You Rich and Diversification Keeps You, Rich
                  </h3>
                </Carousel.Caption>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="hero_img_section">
              <img
                className="d-none d-md-block w-100"
                src={heroThird}
                alt="Third slide"
              />
              <img
                className="d-sm-block d-md-none w-100"
                src={hero3mob}
                alt="First slide"
              />
              <div className="img_overlay"></div>
            </div>

            <div className="__box">
              <Container>
                <Carousel.Caption>
                  <h3 className="slide_heading extraLargeFont">
                    Romancing with Risk
                  </h3>
                </Carousel.Caption>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="white_space"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="section_heading">
              <span>
                <img className="img-fluid" src={line} alt="line" />
              </span>
              <p>About</p>
            </div>
            <p className="section_title mediumFont">The Thought Leader</p>
            <p className="section_para extraSmallFont">
              At the helm of GSV is CA Gaurav V Singhvi who brings more than 2
              decades of prowess in the finance and investment field. He is a
              Serial Entrepreneur, Business Strategist, Angel Investor, Start-Up
              Mentor, and Community Creator. Gaurav has been consistently
              delivering incubation as well as innovation, apart from mentoring
              start-ups across the country (not just in Tier 1 cities but Tier 2
              and Tier 3 as well). In short, he has been living his commitment
              to making India a vibrant start-up nation.
            </p>
            <p className="section_para extraSmallFont">
              Gaurav is associated with companies that actively support
              early-stage start-ups, helping them grow faster by offering them
              seed funding, business development, and community building. His
              strongest passion is serving entrepreneurs and start-ups, and he
              has turned his passion into his purpose in life. Most of these
              start-ups he has invested in – irrespective of the tier they
              belong to – operate at the grassroots level, and tackle localized
              issues, making them viable for mass scale.
            </p>
            <p className="section_para extraSmallFont">
              Apart from this, Gaurav is also the National Director, Executive
              Director & President-Elect of various notable institutions that
              mentor and foster entrepreneurship and play a growth catalyst
              role.
            </p>
          </Col>
          <Col md={0} lg={1}></Col>
          <Col lg={5}>
            <div className="img_box">
              <img className="img-fluid" src={about} alt="about" />
              <img className="img-fluid dp_back" src={DpBack} alt="about" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="white_space"></div>
      <div className="white_space"></div>
      <Container>
        <div className="section_heading">
          <span>
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p>Affiliations</p>
        </div>
        <p className="section_title mediumFont">Affiliations</p>
        <div className="white_space"></div>
        <CommonCarousel breakpoints={breakpoints} slides={slides} />
      </Container>
      <div className="white_space"></div>
      <div className="white_space"></div>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <div className="section_heading">
              <span>
                <img className="img-fluid" src={line} alt="line" />
              </span>
              <p>Portfolio</p>
            </div>
            <p className="section_title mediumFont">Latest Portfolio</p>
            <p className="section_para section_para mb-40">
              Gaurav Singhvi has invested in many start-ups via Gaurav Singhvi
              Ventures. Take a look at our investment portfolios.
            </p>
            <div className="section_heading">
              <a href="#" onClick={handlePortfolio}>
                View Portfolio
              </a>
              <span className="right_arrow">
                <img className="img-fluid" src={rightArror} alt="rightArror" />
              </span>
            </div>
          </Col>
          <Col md={0} lg={1}></Col>
          <Col
            md={12}
            lg={7}
            className="d-flex justify-content-center align-items-center mt-5 mt-lg-0"
          >
            <PortfolioLogos />
          </Col>
        </Row>
      </Container>

      {/* <div className="white_space"></div>
      <div className="white_space"></div>
      <Container>
        <div className="section_heading">
          <span>
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p>Insights</p>
        </div>
        <p className="section_title mediumFont">Our Blogs</p>
        <Row>
          <Col xs={12} md={4} className="mt-5">
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={Insight1} />
              <p className="card_date">July 14, By Mark Henry</p>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className="mb-40">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="section_heading">
                <a href="#">Read More</a>
                <span className="right_arrow">
                  <img
                    className="img-fluid"
                    src={rightArror}
                    alt="rightArror"
                  />
                </span>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mt-5">
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={Insight2} />
              <p className="card_date">July 14, By Mark Henry</p>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className="mb-40">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="section_heading">
                <a href="#">Read More</a>
                <span className="right_arrow">
                  <img
                    className="img-fluid"
                    src={rightArror}
                    alt="rightArror"
                  />
                </span>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mt-5"></Col>
        </Row>
      </Container> */}
      <div className="white_space"></div>
      <div className="white_space"></div>
      <Container>
        <div className="section_heading">
          <span>
            <img className="img-fluid" src={line} alt="line" />
          </span>
          <p>Insights</p>
        </div>
        <p className="section_title mediumFont">In The Blogs</p>
        <BlogArticle />
      </Container>
      <div className="white_space"></div>
      <div className="white_space"></div>
      <div className="white_space"></div>
      <Footer />
    </div>
  );
}

export default Index;
