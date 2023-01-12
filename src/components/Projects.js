import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ahmad-Bin-Ali-Stadium",
      description: "45,032",
      imgUrl: projImg1,
    },
    {
      title: "Al-Bayt-Stadium",
      description: "68,895",
      imgUrl: projImg2,
    },
    {
      title: "Al-Thumama-Stadium",
      description: "44,400",
      imgUrl: projImg3,
    },
    {
      title: "Education-City-Stadium",
      description: "44,667",
      imgUrl: projImg4,
    },
    {
      title: "Khalifa-International-Stadium",
      description: "44,325",
      imgUrl: projImg5,
    },
    {
      title: "Lusail-Stadium",
      description: "88,966",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Stadium</h2>
                <p>Qatar officially known as the State of Qatar, is a small country located in Western Asia on the northeastern coast of the Arabian Peninsula. It is bordered by Saudi Arabia to the south and the Persian Gulf to the north. Qatar has a population of approximately 2.7 million people. The number of stadiums used in the 2022 World Cup in Qatar will be 8.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Al Bayt Stadium. The warmest of Arab welcomes. FIFA World Cup 2022™ Stadium Capacity 68,895.</p>
                      <p>Lusail Stadium. Alive with heritage, an icon for the future FIFA World Cup 2022™ Stadium Capacity 88,966.</p>
                      <p>Ahmad Bin Ali Stadium Where desert stories unfold FIFA World Cup 2022™ Stadium Capacity 45,032.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Al Janoub Stadium Football sails into a new era FIFA World Cup 2022™ Stadium Capacity 44,325.</p>
                      <p>Al Thumama Stadium. A venue steeped in culture and tradition FIFA World Cup 2022™ Stadium Capacity 44,400.</p>
                      <p>Education City Stadium. A shimmering jewel of inspiration FIFA World Cup 2022™ Stadium Capacity 44,667.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
