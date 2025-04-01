import React from "react";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  count: number;
  itemsPerPage: number;
  onSetItemsPerPage?: React.Dispatch<React.SetStateAction<number>>;
};

export type PaginationButtonsProps = {
  totalPages: number;
  currentPage: number;
};

export type ResultsProps = {
  resource: string;
  itemsPerPage: number;
  currentPage: number;
  count: number;
};

export type AddPageButtonProps = {
  page: number;
  activeClass: boolean;
};

export type usePaginationProps = {
  currentPage: number;
  totalPages: number;
};
