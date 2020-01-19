// Libraries
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Fade, Container, Row, ListGroup } from "reactstrap";
import { connect, useDispatch } from "react-redux";

// Components
import Products from "../../components/Products/Products";
import PaginationPage from "../../components/PaginationBar/PaginationBar";

// Actions
import { fetchProducts } from "../../Redux/Action/Products";

const useStyles = createUseStyles({
  layoutsContainer: {
    width: "400px",
    position: "relative"
  },
  layoutsRow: {
    position: "absolute",
    width: "100%",
    boxShadow:
      "10px 10px 10px 0 rgba(0, 0, 0, 0.3), 0 0 50px 0 rgba(0, 0, 0, 0.4) inset",
    transition: "all 0.3s"
  },
  layoutsListGroup: {
    height: "400px",
    width: "100%",
    margin: "10px 0 10px"
  },
  layoutsListGroupHeader: {
    width: "100%",
    marginBottom: 0,
    marginTop: "20px",
    textTransform: "capitalize",
    letterSpacing: "1px",
    fontSize: "30px"
  }
});

const Layouts = props => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const callBackGetCurrentPage = newStateFromChild => {
    setCurrentPage(newStateFromChild);
  };

  return (
    <Container className={styles["layoutsContainer"]}>
      <Fade in={true}>
        <Row className={styles["layoutsRow"]}>
          <h3 className={styles["layoutsListGroupHeader"]}>
            product catalogue
          </h3>
          <ListGroup className={styles["layoutsListGroup"]}>
            <Products products={props.products} currentPage={currentPage} />
          </ListGroup>
          <PaginationPage
            productsCount={props.products.length}
            cbGetCurrentPage={callBackGetCurrentPage}
            currentPage={currentPage}
          />
        </Row>
      </Fade>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.productsList
  };
};

export default connect(mapStateToProps, null)(Layouts);
