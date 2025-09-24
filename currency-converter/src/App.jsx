import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [ConvertedAmount, setConvertedAmount] = useState(0);
  const correncyInfo = useCurrencyInfo(from);

  const options = Object.keys(correncyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(ConvertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * correncyInfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-white/40 rounded-xl p-6 backdrop-blur-md shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-2">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/60 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 shadow"
              onClick={swap}
            >
              swap
            </button>
          </div>

          <div className="w-full mt-2 mb-4">
            <InputBox
              label="To"
              amount={ConvertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
