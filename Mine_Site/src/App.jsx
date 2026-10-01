import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "./components/header/Header";
import SiteMain from "./components/main/main";
import SiteFooter from "./components/footer/footer";
import React, { Component } from "react";
import Carousels from "./components/main/components/Mobile/Carousels ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark_theme: true,
    };
    this.changeThemeSetter = this.changeThemeSetter.bind(this);
  }
  changeThemeSetter() {
    this.setState((prevState) => ({
      dark_theme: !prevState.dark_theme,
    }));
  }
  render() {
    return (
      <>
        {/* here is White theme components */}
        <div className="_container   flex flex-col justify-center items-center">
          {/* <div className="flex flex-col justify-center items-center bg-red-300 h-1/3 w-full">
            <Carousels top={true} LeftSrc="dotnet-tile" CenterSrc=""  RightSrc="" />
          </div> */}
           <Header 
            Dark_theme={this.state.dark_theme}
            changeThemeFunc={this.changeThemeSetter}
          />
          {/* <h1 className='text-6xl  text-white mt-20' id='Home'>sajadd</h1> */}
          <SiteMain />
          <SiteFooter />
        </div>
      </>
    );
  }
}

// export default App;

//  App() {
//   const [count, setCount] = useState(0)
//   render(){
//   return (

//   )
//   }
// }

export default App;
