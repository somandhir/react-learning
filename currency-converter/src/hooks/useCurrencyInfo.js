import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  /*
  API CALL : https://latest.currency-api.pages.dev/v1/currencies/${currency}.json
  // example - conversion rate of eur (currency -> eur)
    API RESULT: 
    {
        "date": "2025-09-24",
        "eur": {
            "1inch": 4.97934746,
            "aave": 0.0042559297,
            "ada": 1.49208715,
            "aed": 4.33391785,
            ... etc.
        }
    }
  */
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res[currency]);
        console.log(data);
      });
  }, [currency]);

  return data;
}
export default useCurrencyInfo;
