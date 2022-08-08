import React from "react";
import ExchangeCard from "../../components/exchange/ExchangeCard";

class Usd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 4.55,
    }
  }

  render() {
    return (
      <ExchangeCard
        rate={this.state.rate}
        exchangeText='USD-PLN'
      />
    );
  }
}

export default Usd;