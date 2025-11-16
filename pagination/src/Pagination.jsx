import React, { useEffect, useState } from "react";
let buildArray = (current, maxPage) => {
  let arr = [];

  let start = Math.max(1, current - 3);
  let end = Math.min(maxPage, current + 3);

  if (start > 1) {
    arr.push(1);
  }

  if (start > 2) {
    arr.push("left-ellipsis");
  }

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  if (end < maxPage - 1) {
    arr.push("right-ellipsis");
  }

  if (end < maxPage) {
    arr.push(maxPage);
  }

  return arr;
};

function Pagination({ page, setPage, maxPage = 50 }) {
  const [pages, setPages] = useState(buildArray(page, maxPage));

  useEffect(() => {
    setPages(buildArray(page, maxPage));
  }, [page, maxPage]);

  return (
    <div className="page-numbers-container">
      <div
        className="page-number-box"
        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
      >
        {"<"}
      </div>

      {pages.map((el, idx) => {
        if (el === "left-ellipsis" || el === "right-ellipsis") {
          return (
            <div className="page-number-box ellipsis" key={el + idx}>
              ...
            </div>
          );
        }

        return (
          <div
            className={
              el === page ? "page-number-box active" : "page-number-box"
            }
            key={el}
            onClick={() => setPage(el)}
          >
            {el}
          </div>
        );
      })}

      <div
        className="page-number-box"
        onClick={() => setPage((prev) => Math.min(maxPage, prev + 1))}
      >
        {">"}
      </div>
    </div>
  );
}

export default Pagination;
