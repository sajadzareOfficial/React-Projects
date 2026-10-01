import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./api";
import { FormComponent } from "./component/FormComponent";

import postData from "./post method";
function App() {
  const [count, setCount] = useState(0);

  return (

    <form
      onSubmit={
        

        postData 

    }
    // method="post"
      action="http://localhost:5184/UserInfo"
      // action="http://localhost:5184/UserInfo"
      className="  gap-3 bg-white/10 rounded-xl  w-1/2 h-96 grid grid-cols-2 grid-rows-3 items-center content-center "
    >
      <h1 className=" h- m-auto col-span-2  text-4xl italic text-blue-100">
        Form With Backend :
      </h1>
      <FormComponent data="userName" />
      <FormComponent data="userFamily" />
      <FormComponent data="password" />
      <input
     
        className=" italic m-auto bg-white/60 max-h-1/2 w-9/12 shadow-sm px-3 py-2 ring-2 ring-purple-400 focus:bg-purple-200 rounded-sm  "
        type="submit"
        value="submit  Datas"
        name="btn"
      />
    </form>
  );
}

export default App;
