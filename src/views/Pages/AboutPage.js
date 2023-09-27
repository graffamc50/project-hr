


import React from "react";
import classnames from "classnames";

// core components
import IndexNavbar from '../../components/Navbars/IndexNavbar';
import Footer from '../../components/Footer/Footer';

// Images
import code1 from "../../assets/img/ncode1.jpg";
import code2 from "../../assets/img/ncode2.png";
import code3 from "../../assets/img/ncode3.jpg";

import dots from "../../assets/img/dots.png";
import path4 from "../../assets/img/path4.png";
import graffam from "../../assets/img/graffam.jpg";
import handybandy from "../../assets/img/bandy.jpg";
import goku from "../../assets/img/GokuProfilePic.jpg";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";



// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";





const carouselItems = [
  {
    src: code2,
    outerHeight: 100,
    altText: "Slide 1",
    caption: "You make your profile",
  },
  {
    src: code1,
    altText: "Slide 2",
    caption: "We process the data",
  },
  {
    src: code3,
    altText: "Slide 3",
    caption: "You recieve offers!",
  },
];

let ps = null;

export default function AboutPage() {
  const [cTabs, cSetTabs] = React.useState(1);
  const [aTabs, aSetTabs] = React.useState(3);
  const [tabs, setTabs] = React.useState(5);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={dots}
          />
          <img
            alt="..."
            className="path"
            src={path4}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Create a Profile</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Submit your resume, diligently fill out your profile template 
                  with all necessary details, specify your preferences, 
                  and relax, knowing it's a one-time effort
                </p>

                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="#rex"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Connect with Us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="#rex"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="#rex"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
        
              <Col className="ml-auto mr-auto" lg="5" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={goku}
                    />
                    <h3 className="title">John Doe</h3>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 5,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(5);
                          }}
                          href="#rex"
                        >
                          Experience
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 6,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(6);
                          }}
                          href="#rex"
                        >
                          Skills
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 7,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(7);
                          }}
                          href="#rex"
                        >
                          Projects
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab5">
                      <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">JOB TITLE</th>
                              <th className="header">YEARS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Junior Web Developer</td>
                              <td>2</td>
                            </tr>
                            <tr>
                              <td>Software Developer</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>Full Stack Developer</td>
                              <td>1</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab6">

                      <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header"></th>
                              <th className="header">LANGUAGES</th>
                              <th className="header"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>JavaScript</td>
                              <td>Python</td>
                              <td>RUST</td>
                            </tr>
                            <tr>
                              <td>C++</td>
                              <td>CSS</td>
                              <td>C#</td>
                            </tr>
                            <tr>
                              <td>Dart</td>
                              <td>HTML</td>
                              <td>React</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab7">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Projects</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>React Website: Freelance work using...</td>
                            </tr>
                            <tr>
                              <td>Python Web Scraper: Based on three...</td>
                            </tr>
                            <tr>
                              <td>C++ Chess Game VS AI: This modern...</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>


        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Algorithm Magic</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Our AI-driven algorithm is meticulously crafted to do one thing—connect 
                    you with your dream job effortlessly. We make sure that our candidates not 
                    only find jobs they truly enjoy but also help employers discover candidates 
                    just like you, perfectly tailored to their needs.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#rex"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#rex"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Receive Offers</h1>
                    <h5 className="text-on-back">03</h5>
                    <p className="profile-description text-left">
                      Sit back, unwind, and let us take care of the rest. 
                      We'll connect you with prospective employers, deliver interview invitations, 
                      and eliminate the need for tedious, repetitive job applications – your job hunt, simplified.
                    </p>
                  </CardHeader>
                </Card>
              </Col>

              <Col className="ml-auto mr-auto" lg="4" md="">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                      Tucson, Arizona <br />
                      United States of America
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      +1 520 971 1980 <br />
                      Mon - Fri, 0900-1700 MST
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    
        <br />
        <br />
        <br />
        <section className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="5" md="6">
                <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={graffam}
                      />
                      <h3 className="title">Colton Graffam</h3>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: cTabs === 1,
                            })}
                            onClick={(e) => {
                              e.preventDefault();
                              cSetTabs(1);
                            }}
                            href="#rex"
                          >
                            About
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: cTabs === 2,
                            })}
                            onClick={(e) => {
                              e.preventDefault();
                              cSetTabs(2);
                            }}
                            href="#rex"
                          >
                            Contact
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + cTabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <tbody>
                              <tr>
                                <td>I developed the frontend of Project HR. I am currently finishing my undergrad in comp sci 
                                  , freelance web developing, and building Project HR. I love coding, traveling, and the gym.
                                  Andy and I have been best friends since high school and I am truly proud that we are making the job 
                                  seeking process so much easier for so many people.
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>



                        <TabPane tabId="tab2">
                        <Table className="tablesorter" responsive>
                          <tbody id="contactTab">
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td ><a href="mailto:colton.b.graffam@gmail.com">Email</a></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td ><a href="https://github.com/graffamc50">GitHub</a></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td><a href="https://www.linkedin.com/in/colton-graffam/">LinkedIn</a></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>

                      </TabContent>
                    </CardBody>
                  </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="5" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={handybandy}
                    />
                    <h3 className="title">Andrew Tapia</h3>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: aTabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            aSetTabs(3);
                          }}
                          href="#rex"
                        >
                          About
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: aTabs === 4,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            aSetTabs(4);
                          }}
                          href="#rex"
                        >
                          Contact
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + aTabs}
                    >
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                            <tbody>
                              <tr>
                                <td>
                                  I am a biomedical engineer by training and a software engineer by passion. 
                                  I designed the backend of this project and have had a blast learning and failing throughout. 
                                  I love great views, breaking and fixing software, and the feeling of a productive workout. 
                                  I have been best friends with Colt for years and I am so proud of this project's development and am so 
                                  excited about the improvements to come! 
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                      </TabPane>
                      <TabPane tabId="tab4">
                        <Table className="tablesorter" responsive>
                          <tbody id="contactTab">
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td><a href="mailto:AndrewKyleTapia@gmail.com">Email</a></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td><a href="https://github.com/Andrewt1213">GitHub</a></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td><a href="https://www.linkedin.com/in/andrew-tapia/">LinkedIn</a></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>

                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
