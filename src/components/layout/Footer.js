import React from "react";

class Footer extends React.Component {
  render() {
    return(
      <footer class="width-full bg-gray-900 flex justify-end flex-wrap px-8 py-4">
        <div class="h-full text-gray-100 flex flex-wrap text-end">
          <span class="w-full">
            React Learning Application
          </span>
          <span class="text-sm w-full">
            Created by Kuba Kowalczykowski
          </span> 
        </div>
      </footer>
    );
  }
}

export default Footer;