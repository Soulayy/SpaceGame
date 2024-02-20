import React, { useState, useRef  } from 'react'
import Firstcomp from './Compoments/Firstcomp/Firstcomp'
import Secondcomp from './Compoments/Secondcomp/Secondcomp'
import Data from "./json/Data.json"
import "./App.css"

import Logo from "./img/logo.jpg"
import Avatar from './img/avatar.jpg'

// import Zelda from "./img/GamePics/zelda.jpg "
import RDR from "./img/GamePics/2.png"
import Cyber from "./img/GamePics/3.png"
import Mario from "./img/GamePics/4.png"
import Witcher from "./img/GamePics/5.png"
import Fortnite from "./img/GamePics/6.png"
import Harry from "./img/GamePics/7.png"
import Tekken from "./img/GamePics/8.png"
import Mincraft from "./img/GamePics/9.png"
import Zelda from "./img/GamePics/1.png"
import FinalF from "./img/GamePics/10.png"
import Assasin from "./img/GamePics/11.png"
import GrandV from "./img/GamePics/12.png"

import Banner from "./img/spaceGame.png"

import Navbar from './Compoments/Navbar/Navbar'

export default function App() {

  const [ showNav, setshowNav ] = useState(false)


  const [monny, setMonny] = useState(0)
  const [article, setArticle] = useState(0)
  const [game, setGame] =useState(Data)

  let ajout = () => {
    setArticle(article+1)
    
  }

  let moins = (stock) => {
    stock.quantite--
  }

  const [empty, setEmpty] = useState(false)

  function rulesshow() {
    rules.current.classList.toggle("hidden")
  }
 
  const rules = useRef()

  

  return (
    <div className='bg-blue-200 h-full w-fit flex items-center flex-col'>
      
                <div className="navbar bg-[#F5F5F5] ">
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
                      <button onClick={rulesshow} empty={empty} setEmpty={setEmpty} moins={moins} game={game} setGame={setGame} monny={monny} setMonny={setMonny} ajout={ajout} Data={Data} Zelda={Zelda} RDR={RDR} Cyber={Cyber} Mario={Mario} Witcher={Witcher} Fortnite={Fortnite} Harry={Harry} Tekken={Tekken} Mincraft={Mincraft} FinalF={FinalF} Assasin={Assasin} GrandV={GrandV} className="btn btn-primary btn-block">View Bag</button>
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
      <div ref={rules} className='w-[500px] rounded-xl h-[500px] flex flex-col justify-center items-center hidden bg-blue-400 absolute z-20 gap-10'>
        <Secondcomp empty={empty} setEmpty={setEmpty} moins={moins} game={game} setGame={setGame} monny={monny} setMonny={setMonny} ajout={ajout} Data={Data} Zelda={Zelda} RDR={RDR} Cyber={Cyber} Mario={Mario} Witcher={Witcher} Fortnite={Fortnite} Harry={Harry} Tekken={Tekken} Mincraft={Mincraft} FinalF={FinalF} Assasin={Assasin} GrandV={GrandV}></Secondcomp>
      </div>

      <Navbar game={game} setshowNav={setshowNav} monny={monny} setMonny={setMonny} show={showNav}/>

    <div className=' w-[80%]  flex justify-center items-center'>
      <Firstcomp empty={empty} setEmpty={setEmpty} moins={moins} game={game} setGame={setGame} monny={monny} setMonny={setMonny} ajout={ajout} Data={Data} Zelda={Zelda} RDR={RDR} Cyber={Cyber} Mario={Mario} Witcher={Witcher} Fortnite={Fortnite} Harry={Harry} Tekken={Tekken} Mincraft={Mincraft} FinalF={FinalF} Assasin={Assasin} GrandV={GrandV}></Firstcomp>
    </div>
    </div>
  )
}