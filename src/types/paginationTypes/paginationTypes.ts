export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  count: number;
};

export type PaginationButtonsProps = {
  totalPages: number;
  currentPage: number;
};

export type ResultsProps = PaginationProps & {};

export type AddPageButtonProps = {
  page: number;
  activeClass: boolean;
};
