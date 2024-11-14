import React, { useEffect } from "react";
import { Card, NavDropdown, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cardImage from "../../assets/quality_assurance.jpg";
import CardImg from "../../assets/companyOverview.jpg";
import CardImg3 from "../../assets/aboutImg.png";
import CardImg4 from "../../assets/ethics_and_compliance.jpg";

function MarketCard({ title }) {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 50,
    });
  });
  useEffect(() => {
    AOS.init({
      duration: 9650,
      offset: 50,
    });
  }, []);
  return (
    <Container>
      <Row
        xs={1}
        md={2}
        clamarketsssName="g-4"
      >
        <Col className="mt-3">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Oil and Gas
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Valtec undertakes projects in the OIl and Gas market.
              </p>
              <Card.Img
                variant="top"
                src={cardImage}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-3">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Energy
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                We specialize in all projects in the energy sector.
              </p>
              <Card.Img
                variant="top"
                src={CardImg}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Mining
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                All your needs at the mining site will be catered for by valtec.
              </p>
              <Card.Img
                variant="top"
                src={CardImg4}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Healthcare
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                We provide sustainable healthcare solutions
              </p>
              <Card.Img
                variant="top"
                src={CardImg4}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Power
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Powering Industries for Impact
              </p>
              <Card.Img
                variant="top"
                src={CardImg4}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Technology
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                We deliver value through technology
              </p>
              <Card.Img
                variant="top"
                src={CardImg4}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Governments
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                You can trust us for all government infrastructure
              </p>
              <Card.Img
                variant="top"
                src={CardImg4}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MarketCard;
