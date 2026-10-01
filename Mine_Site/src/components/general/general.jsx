import React from "react";

export function Btn({ ...props }) {
  return (
    <button
      onClick={props.onClick}
      className={`flex items-center italic font-bold justify-center gap-1 px-2 py-1 rounded-sm ${props.color} ${props.hoverBg} text-center ${props.className}`}
    >
      {props.icon}
      {props.Value}
    </button>
  );
}
export function Input() {
  return <div></div>;
}

export function Circle({ ...props }) {
  return (
    <div className={`flex items-center justify-center  gap-1 ${props.className} `} >
      
      <img id="hamb_photo" className={`ml-8 rounded-full   ring-2 size-20 px-2   `} src={props.img_src} />
      <div className=" w-56 h-26  relative flex flex-col items-center justify-center  ">
        {props.children}
      </div>
      

    </div>
  );
}

// export function () {
//   return <div></div>;
// }
// export default General;
