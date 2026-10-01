// import { useState } from 'react/hooks'
import heroImg from './assets/hero.png'
import preactLogo from './assets/preact.svg'
import viteLogo from './assets/vite.svg'

import {headerTwo as HeaderTwo}  from './components/header/header.jsx' 
import React from 'react'
import  Button  from 'react-bootstrap/Button'
export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
            Headeritems :{
                img:"./img.jpg",
                siteName : "sajadZare",
                DropDowns:{
                    Home:"aa",
                    AboutUs:"aa"
                }
            }
        }
        setTimeout(() => {
       this.setState(
            {
             Headeritems :{
                siteName : "AghaSajad",
               
            }
            }
          )
        }, 5000);
  }
  render(){
    return (
      // <HeaderTwo className="text-uppercase **:text-4xl" {...this.state.Headeritems} />

      // )
      <>
      
       {/* <HeaderTwo className="text-uppercase **:text-4xl" {...this.state.Headeritems} /> */}
       {/* <Button  variant='success w-100' onClick={ev=>alert("kos migehhh")} >here is button dangerus</Button> */}
       <Button variant='primary'>kos</Button>
      </>)
  }
}