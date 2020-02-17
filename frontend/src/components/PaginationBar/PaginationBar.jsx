// Libraries
import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { createUseStyles } from "react-jss";

// Constants
import { PAGE_SIZE } from "../../constants";

const useStyles = createUseStyles({
  paginationBarPagination: {
    width: "50%",
    margin: "auto",
    paddingBottom: '5px'
  }
});

const PaginationBar = props => {
  const { productsCount, currentPage } = props;

  const styles = useStyles();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    let pageSize = PAGE_SIZE;

    let divisionResult = productsCount / pageSize;
    let modulusResult = productsCount % pageSize;

    let newPages = [...pages];
    for (let i = 0; i < divisionResult; i++) {
      newPages = [...newPages, i];
    }

    if (modulusResult !== 0) {
      newPages = [...newPages, divisionResult + 1];
    }

    setPages(newPages);
  }, [productsCount]);

  const renderPaginationPage = () => {
    return (
      pages &&
      pages.length &&
      pages.map((page, index) => {
        return (
          <PaginationItem key={index.toString()} active={currentPage === index}>
            <PaginationLink
              href="#"
              onClick={event => onClickGetCurrentPage(event, index)}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        );
      })
    );
  };

  const onClickGetCurrentPage = (event, index) => {
    event.preventDefault();
    props.cbGetCurrentPage(index);
  };

  const onClickNavigateToFirstPage = event => {
    event.preventDefault();
    props.cbGetCurrentPage(0);
  };

  const onClickNavigateToLastPage = event => {
    event.preventDefault();
    props.cbGetCurrentPage(pages.length - 1);
  };

  const onClickNextButton = event => {
    event.preventDefault();
    props.cbGetCurrentPage(currentPage + 1);
  };

  const onClickPreviousButton = event => {
    event.preventDefault();
    props.cbGetCurrentPage(currentPage - 1);
  };

  return (
    <Pagination className={styles["paginationBarPagination"]} size="sm">
      <PaginationItem disabled={currentPage === 0}>
        <PaginationLink
          first
          href="#"
          onClick={event => onClickNavigateToFirstPage(event)}
        ></PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={currentPage === 0}>
        <PaginationLink
          previous
          href="#"
          onClick={event => onClickPreviousButton(event)}
        ></PaginationLink>
      </PaginationItem>
      {renderPaginationPage()}
      <PaginationItem disabled={currentPage === pages.length - 1}>
        <PaginationLink
          next
          href="#"
          onClick={event => onClickNextButton(event)}
        ></PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={currentPage === pages.length - 1}>
        <PaginationLink
          last
          href="#"
          onClick={event => onClickNavigateToLastPage(event)}
        ></PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationBar;
