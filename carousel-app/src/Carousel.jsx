import React, { useEffect, useState } from "react";

function Carousel() {
  const [data, setdata] = useState([]);
  const [val, setval] = useState(0);
  const [run, setRun] = useState(true);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=100")
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      });
  }, []);
  useEffect(() => {
    if (!run || data.length === 0) return;
    const interval = setInterval(() => {
      setval((v) => (v === data.length - 1 ? 0 : v + 1));
    }, 2000);
    return () => {
      clearInterval(interval); // *** IMPORTANT
    };
  }, [run, data]);
  let handleClick = (str) => {
    // console.log(str);

    if (str === "l") {
      if (val == 0) return;
      setval((prev) => prev - 1);
    } else {
    //   console.log(val, data.length);

      if (val == data.length - 1) setval(0);
      else setval((prev) => prev + 1);
    }
  };

  return (
    <>
      {data.length ? (
        <div className="container">
          <button
            className="arrow left"
            onMouseEnter={() => setRun(false)}
            onMouseLeave={() => setRun(true)}
            onClick={() => handleClick("l")}
          >
            {"<"}
          </button>
          <img
            src={data[val].download_url}
            alt=""
            onMouseEnter={() => setRun(false)}
            onMouseLeave={() => setRun(true)}
          />
          <button
            className="arrow right"
            onMouseEnter={() => setRun(false)}
            onMouseLeave={() => setRun(true)}
            onClick={() => handleClick("r")}
          >
            {">"}
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Carousel;
