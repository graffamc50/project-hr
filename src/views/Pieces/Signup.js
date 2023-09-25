





import React from "react";
//import classnames from "classnames";
import { Link } from "react-router-dom";
import squarePurpleImage from "../../assets/img/square-purple-1.png";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
//  InputGroupText,
//  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";


export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <div className="squareOverlap-B" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              Your Job Hunt : <br />Made Simpler
            </h3>
            <p className="text-white mb-3">
              Streamline your job search with ease. 
                Submit your resume, complete your profile once, 
                and enjoy a hassle-free experience. Our AI-driven algorithm is 
                designed for precision, matching you with your dream job while 
                assisting employers in finding candidates tailored to their needs. 
                Sit back, relax, and let us handle the rest – we'll connect you with 
                employers, send interview invites, and simplify the job hunt.
            </p>
            <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                Register Page
              </Button>
            </div>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-register">
              <CardHeader >
                <CardImg alt="..." src={squarePurpleImage} />

                <CardTitle>Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <div className="input-group">
                    <div className={`input-group-prepend${fullNameFocus ? " input-group-focus" : ""}`}>
                      <span className="input-group-text">
                        <i className="tim-icons icon-single-02" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Full Name"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </div>

                  <div className="input-group">
                    <div className={`input-group-prepend${emailFocus ? " input-group-focus" : ""}`}>
                      <span className="input-group-text">
                        <i className="tim-icons icon-email-85" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </div>

                  <div className="input-group">
                    <div className={`input-group-prepend${passwordFocus ? " input-group-focus" : ""}`}>
                      <span className="input-group-text">
                        <i className="tim-icons icon-lock-circle" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Password"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </div>


                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round" color="primary" size="lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
