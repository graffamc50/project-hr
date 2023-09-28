


import React from "react";
import classnames from "classnames";

import {
    Button,
    Label,
    FormGroup,
    Input,
    InputGroup,
    InputGroupText,
    Container,
    Row,
    Col,
} from "reactstrap";


export default function Basics() {
    const [inputFocus, setInputFocus] = React.useState(false);

    return (
        <div className="section section-basic" id="basic-elements">
            <img alt="..." className="path" src={"assets/img/path1.png"} />
            <Container>
                <h2 className="title">Basic Elements</h2>
                <h3>Buttons</h3>

                <p className="category">Pick your style</p>
                <Row>
                    <Col md="10">
                    <Button color="success" type="button">
                        Default Button
                    </Button>
                    <Button className="btn-round" color="success" type="button">
                        Round Button
                    </Button>
                    </Col>
                </Row>

                <p className="category">Pick your size</p>
                <Row>
                    <Col md="10">
                    <Button color="success" size="sm">
                        Small
                    </Button>
                    <Button color="success" size="md">
                        Regular
                    </Button>
                    <Button color="success" size="lg">
                        Large
                    </Button>
                    </Col>
                </Row>

                <p className="category">Pick your color</p>
                <Row>
                    <Col md="12">
                    <Button color="default">Default</Button>
                    <Button color="primary">Primary</Button>
                    <Button color="info">Info</Button>
                    <Button color="success">Success</Button>
                    </Col>
                </Row>

                <br />
                <h3>Links</h3>
                <Row>
                    <Col md="8">
                    <Button color="link">Default</Button>
                    <Button className="btn-link" color="primary">
                        Primary
                    </Button>
                    <Button className="btn-link" color="info">
                        Info
                    </Button>
                    <Button className="btn-link" color="success">
                        Success
                    </Button>
                    </Col>
                </Row>

                <div className="space-70" />
                <div id="inputs">
                    <h3>Inputs</h3>
                    <p className="category">Form Controls</p>
                    <Row>
                        <Col lg="3" sm="6">
                            <FormGroup>
                            <Input defaultValue="" placeholder="Regular" type="text" />
                            </FormGroup>
                        </Col>
            
                        <Col lg="3" sm="6">
                            <FormGroup className="has-success">
                            <Input
                                className="form-control-success"
                                defaultValue="Success"
                                type="text"
                            />
                            </FormGroup>
                        </Col>
            
                        <Col lg="3" sm="6">
                            <FormGroup className="has-danger">
                            <Input
                                className="form-control-danger"
                                defaultValue="Error Input"
                                type="email"
                            />
                            </FormGroup>
                        </Col>
            
                        <Col lg="3" sm="6">
                            <InputGroup
                            className={classnames({
                                "input-group-focus": inputFocus,
                            })}
                            >
                            <InputGroup Type="prepend">
                                <InputGroupText>
                                <i className="fa fa-user" />
                                </InputGroupText>
                            </InputGroup>
                            <Input
                                placeholder="Left Font Awesome Icon"
                                type="text"
                                onFocus={(e) => setInputFocus(true)}
                                onBlur={(e) => setInputFocus(false)}
                            />
                            </InputGroup>
                        </Col>
            
                        <Col lg="3" sm="6">
                            <InputGroup>
                            <Input placeholder="Password Icon Right" type="text" />
                            <InputGroup Type="append">
                                <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                                </InputGroupText>
                            </InputGroup>
                            </InputGroup>
                        </Col>
                    </Row>
                </div>

                <div className="space-70" />
                <Row id="checkRadios">
                    <Col lg="3" sm="6">
                    <p className="category">Checkboxes</p>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />
                        Unchecked
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input defaultChecked type="checkbox" />
                        <span className="form-check-sign" />
                        Checked
                        </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                        <Input disabled type="checkbox" />
                        <span className="form-check-sign" />
                        Disabled Unchecked
                        </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                        <Input defaultChecked disabled type="checkbox" />
                        <span className="form-check-sign" />
                        Disabled Checked
                        </Label>
                    </FormGroup>
                    </Col>

                    <Col lg="3" sm="6">
                        <p className="category">Toggle Buttons</p>
                        <Input type="switch" id="switch-1" />
                        <br />
                        <Input type="switch" id="switch-2" label="With label" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}
