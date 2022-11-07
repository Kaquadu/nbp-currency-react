import {useEffect, useState} from "react";
import ExchangeCard from "../../components/exchange/ExchangeCard";
import axios from "axios";

export default function Eur() {
  let [currentRate, setRate] = useState(null);
  let [historyRates, setHistoryRates] = useState([]);

  useEffect(() => {
    axios.get('https://api.nbp.pl/api/exchangerates/rates/a/eur/').then((response) => {
      setRate(response.data.rates[0].mid);
    });

    let rates = [];
    axios.get('http://api.nbp.pl/api/exchangerates/rates/a/eur/last/30/?format=json').then((response) => {
      response.data.rates.forEach(rate => {
        rates.push({rate: rate.mid, date: rate.effectiveDate});
      });
    })
    setHistoryRates(rates);
  }, [currentRate]);

  if (!currentRate) return null;
  if (historyRates === []) return null;

  return (
    <ExchangeCard
      historyRates={historyRates}
      currentRate={currentRate}
      exchangeText='EUR-PLN'
    />
  );
}