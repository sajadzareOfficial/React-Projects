import React, { Component } from "react";
import DesktopMenuItems from "./components/Desktop/DesktopMenuItems";
import DesktopMenuButtons from "./components/Desktop/DesktopMenuButtons";
import HamburgerMenu from "./components/Mobile/HamburgerMenu";
import { Btn } from "../general/general";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Header_Text_Items: ["Home", "work", "About", "Notes"],
      HamburgerMenu_items: [
        "Home",
        "My_Post",
        "Chat",
        "Invite Friends",
        "About us",
        "Faq",
      ],
    };
    this.changeSiteTheme = this.changeSiteTheme.bind(this);
  }
  changeSiteTheme() {
    this.props.changeThemeFunc();
  }

  render() {
    
      return (
        <header
          className={`w-4/5 h-14 fixed top-2  flex justify-between items-center border-2 border-white/10 light:border-black/20  rounded-4xl bg-dark light:bg-white/70 !z-50 `}
        >
          <p className="font-header ml-5 font-bold text-3xl bg-linear-to-t bg-clip-text text-transparent from-linear1 from-0% via-linear2 via-50% to-linear3 to-100%">
            Sj.Dev
          </p>

          <DesktopMenuItems
            for_largeScreen="true"
            stateFromParrent={this.state.Header_Text_Items}
          />

          <DesktopMenuButtons changeSiteTheme={this.changeSiteTheme} />
          <HamburgerMenu
            changeSiteTheme={this.changeSiteTheme}
            stateFromParrent={this.state.HamburgerMenu_items}
          />
        </header>
      );
    
  }
}

export default Header;
