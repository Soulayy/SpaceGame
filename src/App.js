import React, { useState } from 'react'
import Firstcomp from './Compoments/Firstcomp/Firstcomp'
import Data from "./json/Data.json"
import "./App.css"

import Logo from "./img/logo.jpg"
import Avatar from './img/avatar.jpg'

// import Zelda from "./img/GamePics/zelda.jpg "
import RDR from "./img/GamePics/RDR.jpg"
import Cyber from "./img/GamePics/cyber.jpg"
import Mario from "./img/GamePics/Odyssey.jpg"
import Witcher from "./img/GamePics/Witcher.jpg"
import Fortnite from "./img/GamePics/Fortnite.jpg"
import Harry from "./img/GamePics/Harry.jpg"
import Tekken from "./img/GamePics/Taken.jpg"
import Mincraft from "./img/GamePics/Mincraft.jpg"
import Zelda from "./img/GamePics/Zelda.jpg"

import Banner from "./img/spaceGame.png"

import Navbar from './Compoments/Navbar/Navbar'
import { RxHamburgerMenu } from "react-icons/rx";

export default function App() {

  const [ showNav, setshowNav ] = useState(false)


  const [monny, setMonny] = useState(0)
  const [article, setArticle] = useState(0)

  const [game, setGame] =useState(Data)
  console.log(game[0].quantite);

  let ajout = () => {
    setArticle(article+1)
  }

  let moins = (stock) => {
    stock.quantite--
  }

  const [empty, setEmpty] = useState(false)

 

  return (
    <div className='bg-blue-200 h-full w-fit flex items-center flex-col'>

                <div className="navbar bg-white opacity-60">
            <div className="flex-1">
              <img onClick={() => setshowNav(!showNav)} className='h-16 w-18' src={Logo} alt="" style={{paddingLeft: showNav && '195px', transition : "all 1s"}} /> 
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{article}</span>
                  </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">{article} Items</span>
                    <span className="text-info">Subtotal: ${monny}</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={Avatar} />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
      {/* <div className='flex justify-start h-10 w-[80%] items-center'>

      <RxHamburgerMenu className='m-5' />
      </div> */}

      <Navbar game={game} setshowNav={setshowNav} monny={monny} show={showNav}/>

    <div className=' w-[80%]  flex justify-center items-center'>
      <Firstcomp empty={empty} setEmpty={setEmpty} moins={moins} game={game} setGame={setGame} monny={monny} setMonny={setMonny} ajout={ajout} Data={Data} Zelda={Zelda} RDR={RDR} Cyber={Cyber} Mario={Mario} Witcher={Witcher} Fortnite={Fortnite} Harry={Harry} Tekken={Tekken} Mincraft={Mincraft}></Firstcomp>
    </div>
    </div>
  )
}
