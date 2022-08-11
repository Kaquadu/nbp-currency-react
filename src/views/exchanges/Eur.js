import React from "react";
import ExchangeCard from "../../components/exchange/ExchangeCard";
import axios from "axios";

export default function Eur() {
  const [rate, setRate] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://api.nbp.pl/api/exchangerates/rates/a/eur/').then((response) => {
      setRate(response.data.rates[0].mid);
    });
  }, []);

  if (!rate) return null;

  return (
    <ExchangeCard
      rate={rate}
      exchangeText='EUR-PLN'
    />
  );
}