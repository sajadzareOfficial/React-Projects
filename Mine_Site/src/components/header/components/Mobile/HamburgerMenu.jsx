import React, { Component } from "react";
import { Btn, Circle } from "../../../general/general";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import HamburgerItems from "./components/HamburgerItems";

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: false,
    };
    this.closeHambMenu = this.closeHambMenu.bind(this);
  }
  closeHambMenu() {
    this.setState((prevState) => ({
      hamburger: !prevState.hamburger,
    }));
  }
  render() {
    return (
      <>
        <Btn
          onClick={this.closeHambMenu}
          className="**:size-10 md:hidden z-10"
          Value={<IoMenu />}
          color="text-white light:text-black/60"
        />
        {this.state.hamburger && (
          <>
            <div
              id="hamburgerMenu"
              className=" md:hidden  fixed flex   flex-col items-center  justify-center  top-0 left-0 w-2/3 z-0 h-screen rounded-md bg-dark **:text-white/70 light:bg-gray-200 **:italic  light:**:text-black/70
            "
            >
              <img
                className=" rounded-full ring-2 ring-white light:ring-black/70 p-1  transition-transform hover:rotate-90 absolute top-3 right-3  "
                src="assets/svg/sun-svgrepo-com (11).svg"
                alt=""
                onClick={(event) => {
                  document.documentElement.classList.toggle("light")(
                    localStorage.theme === "light" ||
                      (!("theme" in localStorage) &&
                        window.matchMedia("(prefers-color-scheme: light)")
                          .matches),
                  );
                }}
              />
              {/* < UserInfoSection /> */}

              <Circle
                className="h-1/4"
                size="12"
                img_src="/assets/photos/ChatGPT Image Sep 25, 2025, 01_47_48 PM.png"
              >
                <p className="text-2xl">my name is sajad</p>
                <p className="">my name is sajad</p>
              </Circle>

              <HamburgerItems closeHambMenu={this.closeHambMenu} stateFromParrent={this.props.stateFromParrent} />

              <Btn
                icon={<IoMdClose size={30} />}
                className=" w-4/5  !h-18     rounded-4xl m-auto   text-center"
                color="bg-red-300"
                hoverBg="hover:bg-red-500"
                Value="close"
                onClick={() => this.setState({ hamburger: false })}
              />
            </div>
            <div
              className=" fixed h-full w-1/3  right-0 top-0  "
              onClick={() => this.setState({ hamburger: false })}
            ></div>
          </>
        )}
      </>
    );
  }
}

export default HamburgerMenu;
