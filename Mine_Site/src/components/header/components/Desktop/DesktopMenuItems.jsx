import React, { Component } from "react";
// import PropTypes from "prop-types";

class DesktopMenuItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
      return (
        <ul className="hidden  md:flex  w-4/5 items-center justify-around text-sm text-subTitle md:text-xl light:**:text-black light:**:hover:text-gray-400">
          {this.props.stateFromParrent.map( items => {
            return (
              <li className="hover:text-white">
                <a key={{items}} className="text-decoration-none p-0 m-0" href="#Selected_Works">{items}</a>
                
              </li>
            )
          })}
        </ul>
      )
  }
}

export default DesktopMenuItems;
