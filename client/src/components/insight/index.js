import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CommonNavbar from "../CommonNavbar";
import line from "../../images/line.png";
import Footer from "../Footer";
import YouTubeVideos from "./YouTubeVideos";

import SocialPost from "./SocialPost";
import { getPosts } from "../../actions/posts";
import BlogArticle from "./BlogArticle";

import "./insight.css";

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  };

  const breakpoints1 = {
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
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  const slides = [1, 1, 1];

  const gallerImages = [
    "./gsv_assets/gallery/1.png",
    "./gsv_assets/gallery/2.png",
    "./gsv_assets/gallery/3.png",
    "./gsv_assets/gallery/4.png",
    "./gsv_assets/gallery/5.png",
    "./gsv_assets/gallery/6.png",
    "./gsv_assets/gallery/7.png",
    "./gsv_assets/gallery/8.png",
  ];

  return (
    <div className="insight_page">
      <Container>
        <CommonNavbar />
      </Container>
      <div className="banner_wrapper">
        <Container>
          <div className="banner_content">
            <h1 className="banner_heading largeFont">
              Latest Blogs, Articles & Posts
            </h1>
            {/* <p className="banner_desc extraSmallFont">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>  */}
          </div>
        </Container>
      </div>
      <Container>
        <BlogArticle />
      </Container>
      <div className="white_space"></div>
      <div className="sectionWithBG">
        <div className="white_space"></div>
        <Container>
          <div className="section_heading">
            <span>
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p>Social Posts</p>
          </div>
          <p className="section_title mediumFont">Social Media Interactions</p>
          <SocialPost />
        </Container>
        <div className="white_space"></div>
      </div>
      {/* <div className="white_space"></div>
      <Container>
        <BlogArticle />
      </Container> */}
      {/* <div className="white_space"></div> */}
      <div className="sectionWithBG">
        {/* <div className="white_space"></div>
        <Container>
          <div className="section_heading">
            <span>
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p>Videos</p>
          </div>
          <p className="section_title mediumFont">Videos </p>
          <YouTubeVideos />
        </Container> */}
        <div className="white_space"></div>
        <div className="white_space"></div>
        <Container>
          <div className="section_heading">
            <span>
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p>Gallery</p>
          </div>
          <p className="section_title mediumFont">Gallery</p>
          <div className="white_space"></div>

          <Row className="px-0 px-md-4">
            {gallerImages?.map((image, index) => (
              <Col key={index} style={{ padding: "0" }} xs={6} md={3}>
                <img className="img-fluid" src={image} alt="galleryImg" />
              </Col>
            ))}
          </Row>
        </Container>
        <div className="white_space"></div>
      </div>
      <div className="white_space"></div>
      <Footer />
    </div>
  );
}

export default Index;
