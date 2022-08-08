import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return(
      <header class="width-full bg-gray-900 flex flex-wrap px-8 py-4 content-center justify-between">
        <h1 class="text-gray-100 font-bold">NBP currencies</h1>
        <nav class="flex flex-row flex-wrap text-gray-100">
          <Link className="px-2" to="/usd">USD-PLN</Link>
          <Link className="px-2" to="/eur">EUR-PLN</Link>
          <Link className="px-2" to="/">Homepage</Link>
        </nav>
      </header>
    );
  }
}

export default Header;