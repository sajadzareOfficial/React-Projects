import { useState } from 'preact/hooks'
import heroImg from './assets/hero.png'
import preactLogo from './assets/preact.svg'
import viteLogo from './assets/vite.svg'
import './app.css'
import headerTwo  from './components/header/header.jsx' 
import React from 'react'

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
            },
            HomeItems:{

            }
        }
  }
  render(){
    return (
      <headerTwo class="bg-red" {...this.state.Headeritems} />
      )
  }
}