import { Button } from "@/components/ui/button";

type CreatePageButtons = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
};

const addPageButton = (
  page: number,
  activeClass: boolean,
  handlePageChange: (page: number) => void
) => {
  return (
    <Button
      key={page}
      variant={activeClass ? "default" : "secondary"}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </Button>
  );
};

const addDots = (key: string) => {
  return (
    <Button key={`dots-${key}`} variant="secondary" disabled>
      ...
    </Button>
  );
};

export const createPageButtons = ({
  currentPage,
  totalPages,
  handlePageChange,
}: CreatePageButtons) => {
  const pageButtons = [];

  // first button
  pageButtons.push(addPageButton(1, currentPage === 1, handlePageChange));

  // dots
  if (currentPage > 3) {
    pageButtons.push(addDots("before"));
  }

  // page before current page
  if (currentPage !== 1 && currentPage !== 2) {
    pageButtons.push(addPageButton(currentPage - 1, false, handlePageChange));
  }

  // current page
  if (currentPage !== 1 && currentPage !== totalPages) {
    pageButtons.push(addPageButton(currentPage, true, handlePageChange));
  }

  //page after current page
  if (currentPage !== totalPages && currentPage !== totalPages - 1) {
    pageButtons.push(addPageButton(currentPage + 1, false, handlePageChange));
  }

  // dots
  if (currentPage < totalPages - 2) {
    pageButtons.push(addDots("after"));
  }

  // last button
  if (totalPages > 1) {
    pageButtons.push(
      addPageButton(totalPages, currentPage === totalPages, handlePageChange)
    );
  }

  return pageButtons;
};
