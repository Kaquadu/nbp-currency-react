import React from "react";

export default function ExchangeCard(props) {
  const [rate] = React.useState(props.rate);
  const [exchangeText] = React.useState(props.exchangeText);

  return (
    <div className="flex flex-row justify-center content-center">
      <div className="border border-gray-300 rounded-xl px-4 py-4 my-4 bg-gray-200 shadow w-2/3 flex flex-row flex-wrap">
        <h2 className="font-bold text-gray-700 w-full pb-2 border-b border-gray-300">{exchangeText} Exchange Rate</h2>
        {rate}
      </div>
    </div>
  );
}