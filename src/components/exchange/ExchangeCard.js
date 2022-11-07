import React from "react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";

export default function ExchangeCard(props) {
  ChartJS.register(...registerables);

  const [currentRate] = React.useState(props.currentRate);
  const [exchangeText] = React.useState(props.exchangeText);
  const [historyRates] = React.useState(props.historyRates);

  let dates = [];
  historyRates.forEach(dateRate => {
      dates.push(dateRate.date);
  });

  let rates = [];
  historyRates.forEach(dateRate => {
    rates.push(dateRate.rate);
  });

  const data = {
    labels: dates,
    datasets: [
      {
        label: exchangeText,
        data: rates,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return (
    <div className="flex flex-row justify-center content-center">
      <div className="border border-gray-300 rounded-xl px-4 py-4 my-4 bg-gray-200 shadow w-2/3 flex flex-row flex-wrap">
        <h2 className="font-bold text-gray-700 w-full pb-2 border-b border-gray-300">{exchangeText} Exchange Rate</h2>
        {currentRate}
        <Line data={ data } />
      </div>
    </div>
  );
}