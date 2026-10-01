import React from "react";
import { Circle } from "../../../general/general";

function Carousels(props) {
  if (props.position==="top") {
    return (
      <div className="flex justify-center relative  w-full h-1/3">
        <div className="LeftItem absolute top-3 left-3">
          <img
            src={`/assets/svg/${props.LeftSrc}.svg`}
            alt=""
            className="size-26 rounded-xl"
          />
        </div>
        <div className="CenterItem">
          <img
            src={`${props.CenterSrc}`}
            alt=""
            className="size-26 rounded-xl  "
          />
        </div>
        <div className="RightItem absolute top-3 right-3">
          <img
            src={`${props.rightSrc}`}
            alt=""
            className="size-26 rounded-xl"
          />
        </div>
      </div>
    );
  }
  if (props.position==="center") {
    return (
      <div className="flex justify-around   w-full h-1/3">
        <div className="LeftItem ">{props.LeftElem}</div>
        <div className="RightItem ">{props.RightElem}</div>
      </div>
    );
  }
  if (props.position==="bottom") {
    return (
      <div className="flex justify-center relative  w-full h-1/3">
        <div className="LeftItem absolute bottom-3 left-3">
          {props.LeftElem}
        </div>
        <div className="CenterItem ">{Props.CenterElem}</div>
        <div className="RightItem absolute bottom-3 right-3">
          {props.RightElem}
        </div>
      </div>
    );
  }
}


export default Carousels;
