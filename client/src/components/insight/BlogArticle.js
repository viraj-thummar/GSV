import React from "react";
import { useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import rightArror from "../../images/arrow-right.svg";

function BlogArticle() {
  const posts = useSelector((state) => state.posts);
  console.log("posts: ", posts);
  return (
    <div className="BlogArticle">
      <Row>
        {posts?.map((post, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mt-5">
            <Card style={{ border: "none" }}>
              <div className="card_imgBox">
                <Card.Img variant="top" src={post.selectedFile} />
              </div>
              <p className="card_category extraSmallFont">{post.category}</p>
              <Card.Title className="card_title smallFont my-3">
                {post.title}
              </Card.Title>
              <Card.Text className="card_text extraSmallFont">
                {post.description.substr(0, 200)}
              </Card.Text>
              <p className="extraSmallFont post_date">
                July 14, <span>{post.creator}</span>
              </p>
              <div className="section_heading">
                <a className="extraSmallFont" href={post.link}>
                  Read More
                </a>
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
        ))}
        {/* <Col xs={12} md={4} className="mt-5">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={Insight1} />

            <Card.Title className="mt-3">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>July 14, By Mark Henry</p>
            <div className="section_heading">
              <a href="#">Read More</a>
              <span className="right_arrow">
                <img className="img-fluid" src={rightArror} alt="rightArror" />
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-5">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={Insight2} />
            <Card.Title className="mt-3">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>July 14, By Mark Henry</p>
            <div className="section_heading">
              <a href="#">Read More</a>
              <span className="right_arrow">
                <img className="img-fluid" src={rightArror} alt="rightArror" />
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mt-5">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={Insight1} />
            <Card.Title className="mt-3">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>July 14, By Mark Henry</p>
            <div className="section_heading">
              <a href="#">Read More</a>
              <span className="right_arrow">
                <img className="img-fluid" src={rightArror} alt="rightArror" />
              </span>
            </div>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
}

export default BlogArticle;
