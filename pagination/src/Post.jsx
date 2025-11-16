import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Post() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    console.log(loading);

    fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
    console.log(loading);
  }, [page]);

  return (
    <>
      <div className="post-container">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div className="photo-container skeleton" key={i}></div>
            ))
          : data.map((_, id) => {
              return (
                <div className="photo-container" key={id}>
                  <img src={_.download_url} alt="" />
                </div>
              );
            })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default Post;
