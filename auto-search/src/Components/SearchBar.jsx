import React, {  useEffect, useRef, useState } from "react";

function SearchBar() {
  const [query, setquery] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");

  const cacheRef = useRef({});
  const controllerRef = useRef(null);

  useEffect(() => {
    setStatus("loading");
    if (cacheRef.current[query]) {
      console.log("fetched using cache");

      setData(cacheRef.current[query]);
      setStatus("fetched");
      return;
    }
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;
    let timeoutId = setTimeout(async () => {
      try {
        console.log("API call");
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&select=title,id`,
          { signal }
        );
        const json = await res.json();
        setData(json.products);
        setStatus("fetched");
        cacheRef.current[query] = json.products;
      } catch (error) {
        setStatus("error");
        console.log("error in api call : ", error);
      }
    }, 1000);
    return () => {
      controllerRef.current?.abort();
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <div className="container">
      <input type="text" onChange={(e) => setquery(e.target.value)} />
      {status === "loading" ? <div>...loading</div> : ""}
      {status === "error" ? <div>...error </div> : ""}
      <ul>
        {status === "fetched" ? (
          data.length ? (
            data.map((product) => {
              return <li key={product.id}>{product.title}</li>;
            })
          ) : (
            <p>No result found</p>
          )
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default SearchBar;
