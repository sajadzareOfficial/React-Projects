import React from "react";

const 


CoreCapabilities = (props) => {
  return (
    <div class="Ability-container  w-full h-auto flex flex-col justify-center items-center ">
      <AbilityTitle />
      <div class="Ability-Front  relative w-1/2 h-80 bg-white/5 light:bg-black/5 ring-2 ring-white/10 rounded-2xl backdrop-blur-md   flex flex-col overflow-hidden justify-around ">
        <div class={`circle-efect size-24 rounded-full blur-2xl ${props.circleColor}  absolute -right-8 -top-8`} />
        <img src="./assets/svg/Front.svg" class="size-12 relative  left-5  " alt="" />
        <p class="Ability-Front__Title ml-5 text-xl text-white light:text-black">
          {props.Title}
        </p>
        {props.children}
      </div>
    </div>
  );
};
function AbilityTitle() {
  return (
    <div class="Ability-Info mt-24 mb-16 flex flex-col justify-center items-center gap-4">
      <p class="Text  text-white text-3xl light:text-black">
        Core <span class="text-linear1">Capabilities</span>
      </p>
      <p class="sub_Text text-center w-4/5 inline text-gray-300 text-xl light:text-light__text">
        Blending technical expertise with creative direction to build scalable,
        beautiful products.
      </p>
    </div>
  );
}
export default CoreCapabilities;
