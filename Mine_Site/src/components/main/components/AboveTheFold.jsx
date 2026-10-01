import React from "react";

function AboveTheFold() {
  return (
    <>
      <div className="mt-8 w-72 h-9  bg-secondary/5 border-1 border-secondary/30 rounded-4xl flex items-center justify-around ">
        <div className=" size-4 relative flex ">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex size-4 rounded-full bg-secondary  "></span>
        </div>
        <div className="text flex items-center h-5 text-secondary ">
          Available for new projects
        </div>
      </div>
      <div className="hero w-84 h-24">
        <p className="text-5xl text-white text-center mt-6 light:text-black/70">
          Designing the{" "}
          <span className="  bg-linear-to-t bg-clip-text text-transparent from-linear1 from-0% via-linear2 via-50% to-linear3 to-100%">
            Future
          </span>
          of Web.
        </p>
      </div>
      <div className="sub-hero mt-10  w-4/5">
        <p className="text-xl text-center text-light__text ">
          I'm a creative developer tailored for the modern web. I build
          immersive, high-performance digital experiences that blend art with
          engineering.
        </p>
      </div>
      <div className="btns mt-8 w-40 h-32 flex flex-col gap-4">
        <div className="firstBtn  w-full h-1/2  bg-linear-to-b   from-linear1 from-0%  to-linear2 to-100%  rounded-4xl flex justify-center gap-2 items-center ">
          <p className="text-[#082F49] font-bold">View My Work</p>
          <img className="size-5 " src="assets/svg/arow.svg" alt="" />
        </div>
        <div className="secondBtn w-full h-1/2 bg-[#1E293B]/30 border border-border rounded-4xl  flex justify-center gap-2 items-center">
          <p className="font-bold text-white light:text-black/70">Download CV</p>
          <img src="assets/svg/folder.svg" alt="" />
        </div>
      </div>
      <div className="circle-bounce mt-4 size-7 rounded-full  bg-white animate-bounce  ring-4 ring-border flex items-center justify-center">
        <img src="assets/svg/arow.svg" className="rotate-[135deg]  " alt="" />
      </div>
      <div className="w-4/5 h-16 flex justify-between items-center gap-2 light:**:text-black/70">
        <div className="info-box w-1/3 h-full flex items-center justify-center gap-2">
          <img src="assets/svg/code.svg" alt="" />
          <p className="text-white">Clean Code</p>
        </div>
        <div className="info-box w-1/3 h-full flex items-center justify-center gap-2">
          <img src="assets/svg/2.svg" alt="" />
          <p className="text-white">Pixel Perfect</p>
        </div>
        <div className="info-box w-1/3 h-full flex items-center justify-center gap-2">
          <img src="assets/svg/rocket.svg" alt="" />
          <p className="text-white">Fast Performance</p>
        </div>
      </div>
      <div className="main-img-Container w-full p-0 mt-5 h-[600px]   overflow-hidden  relative   ">
        <div
          className="main-img light:bg-light-blue/30  hover:animate-pulse w-4/5 h-[450px] rounded-4xl border-2    border-white/80 md:w-2/3    bg-gradient-to-t bg-dark opacity-100  
                      absolute right-0 flex items-center justify-center "
        >
          <img
            src="assets/photos/mine photo edited.png"
            className=" max-w-3/5 md:w-[40%]"
            alt=""
          />
          <div className="w-4/5 h-28   bg-dark light:bg-white/90 light:border-2 light:border-black/20  rounded-2xl z-10 absolute bottom-5 ring-3 ring-white/10 flex flex-col items-center justify-around">
            <div className="flex  items-center justify-between w-4/5">
              <p className=" text-linear1 text-lg inline "> Current Status</p>
              <div className="circle  inline size-4 rounded-full bg-[#00C950] ring-6 ring-green-500/50 animate-pulse "></div>
            </div>
            <p className="Text text-white text-xl w-4/5 light:text-light__text">
              Refining the design system for{" "}
              <span
                className="
                            text-pink-400"
              >
                Project Nebula.
              </span>
            </p>
          </div>
        </div>
        <div className="main-img__border  w-4/5 h-[450px]  md:w-2/3  rounded-4xl border-2 border-linear1/20 absolute    -right-10 mt-10 -z-10 flex justify-center items-end ">
          <div className="main-img__line animate-bounce   w-[3px] h-12 absolute -bottom-8  bg-gradient-to-b from-linear1/5 from-0% via-linear1 via-50% to-linear1/5 to-100%   "></div>
        </div>

        <div className="main-img__border  md:w-2/3  w-4/5 h-[450px]  rounded-4xl border-2 border-linear2/20 absolute  -right-20 mt-20 -z-20"></div>
      </div>
    </>
  );
}

export default AboveTheFold;
