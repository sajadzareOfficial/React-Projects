import React from "react";

function HamburgerItems (props)  {
  return (
    <div className=" flex flex-col   justify-around  w-4/5 h-2/4">
      {props.stateFromParrent.map((item) => {
        return (
          <div className="flex  items-center  gap-3">
            <img
              src={`${item}.svg`}
              alt=""
              className="size-8 text-center px-2 ring-2 rounded-full light:bg-transparent light:ring-0  bg-white/90 ring-black/50
                       "
            />
            <a
              key={item.length.toString()}
              className="text-4xl text-black "
              href={`#${item}`}
              onClick={props.closeHambMenu}
            >
              {item}
            </a>
          </div>
        );
      })}
    </div>
  )
}

export default HamburgerItems;
