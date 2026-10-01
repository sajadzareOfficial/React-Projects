import React from "react";

function Languages(props) {
  return (
    <div class="language sm:text-[8px]  h-full flex items-center justify-center m- gap-2">
      <img class="size-16" src={`assets/svg/${props.ImgSrc}.svg`} alt="" />
      <p class="text text-2xl text-white">{props.Value}</p>
    </div>
  );
}

export default Languages;
