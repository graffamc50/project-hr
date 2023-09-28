



import React from "react";
// reactstrap components
import {
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function PaginationSection() {
  return (
    <div className="section section-pagination">
      <img alt="..." className="path" src={"assets/img/path4.png"} />
      <img
        alt="..."
        className="path path1"
        src={"assets/img/path5.png"}
      />
      <Container>
        <Row>
          <Col md="6">
            <h3 className="mb-4">Progress Bars</h3>
            <div className="progress-container">
              <span className="progress-badge">Default</span>
              <Progress max="100" value="25">
                <span className="progress-value">25%</span>
              </Progress>
            </div>
            <div className="progress-container progress-info">
              <span className="progress-badge">Primary</span>
              <Progress max="100" value="60">
                <span className="progress-value">60%</span>
              </Progress>
            </div>
          </Col>

          <Col md="6">
            <h3 className="mb-5">Pagination</h3>
            <Pagination
              className="pagination pagination-info"
              listClassName="pagination-info"
            >
              <PaginationItem className="active">
                <PaginationLink
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  5
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <Pagination
              className="pagination pagination-info"
              listClassName="pagination-info"
            >
              <PaginationItem>
                <PaginationLink
                  aria-label="Previous"
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-double-left"
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  aria-label="Next"
                  href="#rex"
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-double-right"
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <br />
            <h3 className="mb-5">Labels</h3>
            <Badge className="badge-default">Default</Badge>
            <Badge color="primary">PoopyPink</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge className="badge-neutral">Neutral</Badge>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
