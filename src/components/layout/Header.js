import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return(
    <header className="width-full bg-gray-900 flex flex-wrap px-8 py-4 content-center justify-between">
      <Link to="/"><h1 className="text-gray-100 font-bold">NBP currencies</h1></Link>
      <nav className="flex flex-row flex-wrap text-gray-100">
        <Link className="px-2" to="/usd">USD-PLN</Link>
        <Link className="px-2" to="/eur">EUR-PLN</Link>
      </nav>
    </header>
  );
}