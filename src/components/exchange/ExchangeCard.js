import React from "react";

class ExchangeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeText: props.exchangeText,
      rate: props.rate,
    }
  }

  render() {
    return (
      <div class="flex flex-row justify-center content-center">
        <div class="border border-gray-300 rounded-xl px-4 py-4 my-4 bg-gray-200 shadow w-2/3 flex flex-row flex-wrap">
          <h2 class="font-bold text-gray-700 w-full pb-2 border-b border-gray-300">{this.state.exchangeText} Exchange Rate</h2>
          {this.state.rate}
        </div>
      </div>
    );
  }
}

export default ExchangeCard;