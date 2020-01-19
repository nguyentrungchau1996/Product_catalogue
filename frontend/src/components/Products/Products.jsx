// Libraries
import React, { Fragment } from "react";
import { ListGroupItem, Card, CardBody, CardText } from "reactstrap";
import { createUseStyles } from "react-jss";
import { PAGE_SIZE } from "../../constants";

const useStyles = createUseStyles({
  productsListGroupItem: {
    background: "transparent",
    border: "none"
  },
  productsCard: {
    margin: "0 20px",
    padding: "0 10px"
  },
  productsCardBody: {
    padding: '0.75rem'
  },
  productsCardText: {
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left"
  },
  productsCardTextSpan: {
    fontWeight: "400"
  }
});

const Products = props => {
  const { currentPage } = props;

  const styles = useStyles();

  const renderProductsList = () => {
    return props.products
      .slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE)
      .map((product, index) => (
        <ListGroupItem
          key={index.toString()}
          className={styles["productsListGroupItem"]}
        >
          <Card className={styles["productsCard"]}>
            <CardBody className={styles['productsCardBody']}>
              <CardText className={styles["productsCardText"]}>
                Name:{" "}
                <span className={styles["productsCardTextSpan"]}>
                  {product.title}
                </span>
              </CardText>
              <CardText className={styles["productsCardText"]}>
                Price:{" "}
                <span className={styles["productsCardTextSpan"]}>
                  {product.price}
                </span>
              </CardText>
              <CardText className={styles["productsCardText"]}>
                By:{" "}
                <span className={styles["productsCardTextSpan"]}>
                  {product.by}
                </span>
              </CardText>
              <CardText className={styles["productsCardText"]}>
                Link: <a href="#">{product.link}</a>
              </CardText>
            </CardBody>
          </Card>
        </ListGroupItem>
      ));
  };

  return <Fragment>{renderProductsList()}</Fragment>;
};

export default Products;
