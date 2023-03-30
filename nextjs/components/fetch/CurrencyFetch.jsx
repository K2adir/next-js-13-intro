"use client";
import { useEffect, useState } from "react";

function CurrencyFetch() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    async function fetchRate() {
      const res = await fetch(
        "https://openexchangerates.org/api/latest.json?app_id=cafeb18efced424a919955c9ee0d63cb&symbols=USD,EUR"
      );
      const data = await res.json();
      setRate(data.rates.EUR / data.rates.USD);
      console.log(setRate, "x");
    }
    fetchRate();
  }, []);

  return <div>{rate ? <p>1 USD = {rate.toFixed(2)} EUR</p> : <p></p>}</div>;
}

export default CurrencyFetch;
