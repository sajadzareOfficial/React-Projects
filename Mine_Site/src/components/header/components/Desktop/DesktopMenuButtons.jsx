import React, { Component } from "react";

class DesktopMenuButtons extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="nav-btns hidden   relative right-0 z-50 md:flex justify-center md:justify-end md:mr-3 items-center w-32 h-10 gap-3">
          <img
            className="rounded-full ring-2 light:ring-black/50 ring-white p-1  transition-transform hover:rotate-90  "
            src="assets/svg/sun-svgrepo-com (11).svg"
            alt=""
            onClick={(event) => {
              document.documentElement.classList.toggle("light");
            }}
          />

          <p className=" text-center hidden md:inline font-header2  bg-white light:bg-gray-400  text-sm font-bold rounded-sm w-22 light:py-2   px-2 py-1.5   ">
            Hire-me
          </p>
        </div>
      </>
    );
  }
}

export default DesktopMenuButtons;
