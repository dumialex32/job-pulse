import React from "react";

//////////////////////
/* pagination types */
//////////////////////

// pagination
export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  count: number;
  itemsPerPage: number;
  onSetItemsPerPage?: React.Dispatch<React.SetStateAction<number>>;
};

// pagination buttons
export type PaginationButtonsProps = {
  totalPages: number;
  currentPage: number;
};
export type AddPageButtonProps = {
  page: number;
  activeClass: boolean;
};

// usePagination
export type usePaginationProps = {
  currentPage: number;
  totalPages: number;
};

///////////////////
/* results types */
///////////////////

export type ResultsProps = {
  resource: string;
  itemsPerPage: number;
  currentPage: number;
  count: number;
};
