import React from "react";
import { HeaderITEMS } from "../../../../constants/constants";
import { BrowserRouter, Link } from "react-router-dom";

function Desktop() {
  return (
    <div className="flex-center h-full ">
      <div className="w-3/4 flex-center  justify-around">
        {HeaderITEMS.map((item) => {
        return <Link to={item.path} key={item.id} className="text-darkPrimary light:text-lightPrimary " >{item.Content}</Link>;
      })}
      </div>
    
        <img src="assets/icons/sun-svgrepo-com (11).svg" className=" w-8 ring ring-lightPrimary rounded-full p-1 hover:rotate-45 hover:transition-transform" alt="" onClick={
          event=>{
            document.documentElement.classList.toggle("light"); 
          }
        } />
    
    </div>
  );
}

export default Desktop;
