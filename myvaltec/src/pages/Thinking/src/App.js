
import React from 'react';
import NavBar from '../../../components/navbar/navbar';
import Banner from './components/Banner';
import CompanyOverview from './components/CompanyOverview';
import Purpose from './components/Purpose';
import Section from './components/Section';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../../components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Banner title="Thinking" />
      <CompanyOverview />
      <Purpose />
      <Section title="Digital Innovation" content="The potential of harnessing digital technologies to deliver value for our client's projects drives us at VALTEC. We collaborate with experts and build global partnerships with leading industrial solutions to deliver transformative outcomes for our customers. We continuously seek improvement in business performance by efficiently considering evolving technologies, industry best practices, and stakeholder expectations. We strongly emphasize effective ways of working together and developing productive long-term relationships with our internal and external stakeholders." />
      <Section title="Ethics & Compliance" content="VALTEC prioritizes integrity and maintains high ethical and compliance standards while delivering exceptional value to our clients. We collaborate with each other, our clients, suppliers, and stakeholders is essential to embodying our principles and achieving our Blueprint.
                Our principles shape our culture; they define our work approach. Our Blueprint details our strategy and ambitions across all business sectors.
                We embody our principles by establishing clear behavioral expectations for our team and fostering an integrity-focused culture that informs our daily decisions, actions, and relationships.
                Our clients recognize our commitment to ethical conduct and compliance with local regulations. We consistently build client trust through exceptional service and strict adherence to ethical practices. Our integrity is guided by our Code of Conduct and Anticorruption Policy, which lays out crucial legal and ethical standards for making sound business decisions across all projects." />
      <Section title="Quality and Assurance" content="When we get it wrong, the consequences can be severe. We fully recognize our duty to develop safe and reliable technical solutions. All our projects follow a tailored, strong, flexible, and systematic process that includes non-negotiable guidelines, expected results, and suitable toolkits.
                VALTEC is dedicated to safeguarding the physical, psychological, and social well-being of our employees, stakeholders, and communities through effective risk management strategies. Our services adhere to ISO 9001 and ISO 17025." 
                extraContent={<>
                  <h5 className='text-danger'>VALTEC upholds a robust QHSE policy by:</h5>
                <span>Establishing clear and measurable Quality Objectives across all operational sectors is imperative. Continuous monitoring, evaluation, and enhancement of the Quality System and its processes are essential to our success. Our clientele is significant to us; thus, we endeavor to cultivate partnerships with them at every level to comprehensively understand their requirements. We strictly adhere to all pertinent local, national, and international regulations.
                Prioritizing the health and safety of both our workforce and stakeholders. By improving our performance, we aim to lessen our environmental impact. Promoting awareness among all employees regarding their responsibilities in client service, safety, and environmental stewardship is crucial.
                Defining responsibilities and establishing communication for each department. Our design, engineering, project, and construction teams implement effective risk mitigation strategies, integrating safety from the project’s inception. Thorough planning safeguards employees and the environment.</span>
                <Container>
                  <Row>
                    <Col xs={2} className='ps-0'><p className='btn btn-primary w-100 mt-2 ms-0'>ISO 9001 certification</p></Col>
                    <Col xs={2} className='ps-0'><p className='btn btn-primary w-100 mt-2 ms-0'>ISO 17025 certification</p></Col>
                  </Row>
                </Container></>
                }/>
      <Footer/>
    </>
  );
}

export default App;