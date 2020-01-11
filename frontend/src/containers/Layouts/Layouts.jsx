// Libraries
import React from "react";
import { createUseStyles } from "react-jss";
import {
  Card,
  CardBody,
  CardText,
  Fade,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container, 
  Row,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const useStyles = createUseStyles({
  layoutsCard: {
    margin: "0 20px",
    padding: "0 20px"
  },
  layoutsCardText: {
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: 'left'
  },
  layoutsCardTextSpan: {
    fontWeight: "400"
  },
  layoutsContainer: {
    width: '400px',
    position: 'relative'
  },
  layoutsRow: {
    position: "absolute",
    width: "100%",
    boxShadow:
      "10px 10px 10px 0 rgba(0, 0, 0, 0.3), 0 0 50px 0 rgba(0, 0, 0, 0.4) inset",
    transition: "all 0.3s",
  },
  layoutsListGroup: {
    overflowY: "scroll",
    height: "400px",
    width: '100%',
    margin: '10px 0 20px'
  },
  layoutsListGroupHeader: {
    width: '100%',
    marginBottom: 0,
    marginTop: '20px',
    textTransform: 'capitalize',
    letterSpacing: '1px',
    fontSize: '30px'
  },
  layoutsListGroupItem: {
    background: 'transparent',
    border: 'none'
  },
  layoutsPagination: {
    margin: 'auto',
    width: '56%'
  }
});

const Layouts = () => {
  const styles = useStyles();

  return (
    <Container className={styles['layoutsContainer']}>
      <Fade in={true}>
        <Row className={styles['layoutsRow']}>
          <h3 className={styles['layoutsListGroupHeader']}>product catalogue</h3>
          <ListGroup className={styles['layoutsListGroup']}>
            <ListGroupItem className={styles['layoutsListGroupItem']}>
            <Card className={styles["layoutsCard"]}>
            <CardBody>
              <CardText className={styles["layoutsCardText"]}>
                Name:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  Macbook pro 13inch
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Price:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  40.000.000 VNĐ
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                By: <span className={styles["layoutsCardTextSpan"]}>Tiki</span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Link:{" "}
                <a href="#">
                  https://tiki.vn/apple-macbook-pro-touch-bar-2019-13-inchs-i5-8gb-128gb-hang-nhap-khau-chinh-hang-p23264373.html?src=search&2hi=1&keyword=macbook+pro+2019
                </a>
              </CardText>
            </CardBody>
          </Card>
          </ListGroupItem>
            <ListGroupItem className={styles['layoutsListGroupItem']}>
            <Card className={styles["layoutsCard"]}>
            <CardBody>
              <CardText className={styles["layoutsCardText"]}>
                Name:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  Macbook pro 13inch
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Price:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  40.000.000 VNĐ
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                By: <span className={styles["layoutsCardTextSpan"]}>Tiki</span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Link:{" "}
                <a href="#">
                  https://tiki.vn/apple-macbook-pro-touch-bar-2019-13-inchs-i5-8gb-128gb-hang-nhap-khau-chinh-hang-p23264373.html?src=search&2hi=1&keyword=macbook+pro+2019
                </a>
              </CardText>
            </CardBody>
          </Card>
          </ListGroupItem>
            <ListGroupItem className={styles['layoutsListGroupItem']}>
            <Card className={styles["layoutsCard"]}>
            <CardBody>
              <CardText className={styles["layoutsCardText"]}>
                Name:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  Macbook pro 13inch
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Price:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  40.000.000 VNĐ
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                By: <span className={styles["layoutsCardTextSpan"]}>Tiki</span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Link:{" "}
                <a href="#">
                  https://tiki.vn/apple-macbook-pro-touch-bar-2019-13-inchs-i5-8gb-128gb-hang-nhap-khau-chinh-hang-p23264373.html?src=search&2hi=1&keyword=macbook+pro+2019
                </a>
              </CardText>
            </CardBody>
          </Card>
          </ListGroupItem>
            <ListGroupItem className={styles['layoutsListGroupItem']}>
            <Card className={styles["layoutsCard"]}>
            <CardBody>
              <CardText className={styles["layoutsCardText"]}>
                Name:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  Macbook pro 13inch
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Price:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  40.000.000 VNĐ
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                By: <span className={styles["layoutsCardTextSpan"]}>Tiki</span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Link:{" "}
                <a href="#">
                  https://tiki.vn/apple-macbook-pro-touch-bar-2019-13-inchs-i5-8gb-128gb-hang-nhap-khau-chinh-hang-p23264373.html?src=search&2hi=1&keyword=macbook+pro+2019
                </a>
              </CardText>
            </CardBody>
          </Card>
          </ListGroupItem>
            <ListGroupItem className={styles['layoutsListGroupItem']}>
            <Card className={styles["layoutsCard"]}>
            <CardBody>
              <CardText className={styles["layoutsCardText"]}>
                Name:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  Macbook pro 13inch
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Price:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  40.000.000 VNĐ
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                By: <span className={styles["layoutsCardTextSpan"]}>Tiki</span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Link:{" "}
                <a href="#">
                  https://tiki.vn/apple-macbook-pro-touch-bar-2019-13-inchs-i5-8gb-128gb-hang-nhap-khau-chinh-hang-p23264373.html?src=search&2hi=1&keyword=macbook+pro+2019
                </a>
              </CardText>
            </CardBody>
          </Card>
          </ListGroupItem>
            <ListGroupItem className={styles['layoutsListGroupItem']}>
            <Card className={styles["layoutsCard"]}>
            <CardBody>
              <CardText className={styles["layoutsCardText"]}>
                Name:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  Macbook pro 13inch
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Price:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  40.000.000 VNĐ
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                By: <span className={styles["layoutsCardTextSpan"]}>Tiki</span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Link:{" "}
                <a href="#">
                  https://tiki.vn/apple-macbook-pro-touch-bar-2019-13-inchs-i5-8gb-128gb-hang-nhap-khau-chinh-hang-p23264373.html?src=search&2hi=1&keyword=macbook+pro+2019
                </a>
              </CardText>
            </CardBody>
          </Card>
          </ListGroupItem>
            <ListGroupItem className={styles['layoutsListGroupItem']}>
            <Card className={styles["layoutsCard"]}>
            <CardBody>
              <CardText className={styles["layoutsCardText"]}>
                Name:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  Macbook pro 13inch
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Price:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  40.000.000 VNĐ
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                By: <span className={styles["layoutsCardTextSpan"]}>Tiki</span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Link:{" "}
                <a href="#">
                  https://tiki.vn/apple-macbook-pro-touch-bar-2019-13-inchs-i5-8gb-128gb-hang-nhap-khau-chinh-hang-p23264373.html?src=search&2hi=1&keyword=macbook+pro+2019
                </a>
              </CardText>
            </CardBody>
          </Card>
          </ListGroupItem>
            <ListGroupItem className={styles['layoutsListGroupItem']}>
            <Card className={styles["layoutsCard"]}>
            <CardBody>
              <CardText className={styles["layoutsCardText"]}>
                Name:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  Macbook pro 13inch
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Price:{" "}
                <span className={styles["layoutsCardTextSpan"]}>
                  40.000.000 VNĐ
                </span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                By: <span className={styles["layoutsCardTextSpan"]}>Tiki</span>
              </CardText>
              <CardText className={styles["layoutsCardText"]}>
                Link:{" "}
                <a href="#">
                  https://tiki.vn/apple-macbook-pro-touch-bar-2019-13-inchs-i5-8gb-128gb-hang-nhap-khau-chinh-hang-p23264373.html?src=search&2hi=1&keyword=macbook+pro+2019
                </a>
              </CardText>
            </CardBody>
          </Card>
          </ListGroupItem>
          </ListGroup>
          <Pagination className={styles['layoutsPagination']} size="sm">
            <PaginationItem disabled>
              <PaginationLink first href="#"></PaginationLink>
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink previous href="#"></PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#"></PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#"></PaginationLink>
            </PaginationItem>
          </Pagination>
        </Row>
      </Fade>
    </Container>
  );
};

export default Layouts;
