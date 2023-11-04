import { useMemo, useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pages, setPages] = useState([]);

  useMemo(() => {
    const array = [];
    for (let i = 1; i < totalPages + 1; i++) {
      array.push(i);
    }
    setPages(array);
  }, [totalPages]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-lg justify-content-center">
        {pages?.map((item, index) => {
          return (
            <li
              className={
                item === currentPage ? " page-item active" : " page-item"
              }
              key={index}>
              <span
                style={{ cursor: "pointer" }}
                className="page-link"
                onClick={() => onPageChange(item)}>
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
