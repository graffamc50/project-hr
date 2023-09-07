


import React from "react";
import classnames from "classnames";

// core components
import IndexNavbar from '../../components/Navbars/IndexNavbar';
import Footer from '../../components/Footer/Footer';

// Images
import denys from "../../assets/img/denys.jpg"
import fab from "../../assets/img/fabien-bazanegue.jpg"
import mark from "../../assets/img/mark-finn.jpg"
import dots from "../../assets/img/dots.png"
import path4 from "../../assets/img/path4.png"
import graffam from "../../assets/img/graffam.jpg"

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  FormText,
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
    src: denys,
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: fab,
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: mark,
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function AboutPage() {
  const [tabs, setTabs] = React.useState(1);
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
                  Submit your resume, complete your profile template, fill out
                  your preferences, and never touch it again!
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
                    Follow us
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
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={graffam}
                    />
                    <h4 className="title">John Doe</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#rex"
                        >
                          Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#rex"
                        >
                          Send
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#rex"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">LANGUAGE</th>
                              <th className="header">YEARS</th>
                              <th className="header">VALUE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>JS</td>
                              <td>4</td>
                              <td>48,870.75 USD</td>
                            </tr>
                            <tr>
                              <td>C++</td>
                              <td>5</td>
                              <td>64,53.30 USD</td>
                            </tr>
                            <tr>
                              <td>Dart</td>
                              <td>1</td>
                              <td>18,354.96 USD</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">Email</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="e.g. john@example.com"
                                type="text"
                              />
                              <FormText color="default" tag="span">
                                Please enter a valid email address.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Amount</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="1.587" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Latest Crypto News</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>The Daily: Nexo to Pay on Stable...</td>
                            </tr>
                            <tr>
                              <td>Venezuela Begins Public of Nation...</td>
                            </tr>
                            <tr>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
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
                  Our AI driven algorithm is designed to match you to your future job. 
                  We ensure that our candidates get jobs that they enjoy and employers
                  get employees like you. 
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
                      Our AI-driven algorithm is designed to match you to your future job. We ensure that our candidates get jobs that they enjoy and employers get employees like you.
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
                      Bld Mihail Kogalniceanu, nr. 8, <br />
                      7652 Bucharest, <br />
                      Romania
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
                      Colton Graffam <br />
                      +1 520 971 1980 <br />
                      Mon - Fri, 0900-1700 MST
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
