import React from "react";
import ExchangeCard from "../../components/exchange/ExchangeCard";

class Eur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 4.85,
    }
  }

  render() {
    return (
      <ExchangeCard
        rate={this.state.rate}
        exchangeText='EUR-PLN'
      />
    );
  }
}

export default Eur;