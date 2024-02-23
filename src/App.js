import React, { useState, useRef  } from 'react'
import Firstcomp from './Compoments/Firstcomp/Firstcomp'
import Secondcomp from './Compoments/Secondcomp/Secondcomp'
import Data from "./json/Data.json"
import "./App.css"

import Logo from "./img/logo.png"
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

import Slog from "./img/slog.png"


import Navbar from './Compoments/Navbar/Navbar'

export default function App() {

  const [ showNav, setshowNav ] = useState(false)


  const [monny, setMonny] = useState(0)
  const [article, setArticle] = useState(0)
  const [game, setGame] =useState(Data)


  const [choix, setChoix] = useState("")

  const [panier, setPanier] = useState([])

  console.log(panier);


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
    <div className='App h-full w-fit flex items-center flex-col'>
      
              <div className="navbar bg-[#F5F5F5] ">
            <div className="flex-1">
              <img onClick={() => setshowNav(!showNav)} className='h-16 w-18' src={Logo} alt="" style={{paddingLeft: showNav && '195px', transition : "all 1s"}} /> 
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost bg-orange-600 btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{article}</span>
                  </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-orange-600 shadow ">
                  <div className="card-body">
                    <span className="font-bold text-lg">{article} Items</span>
                    <span className="text-white">Subtotal: ${monny}</span>
                    <div className="card-actions flex justify-center items-center">
                      <button onClick={rulesshow} setPanier={setPanier} panier={panier} article={article} empty={empty} setEmpty={setEmpty} moins={moins} game={game} setGame={setGame} monny={monny} setMonny={setMonny} ajout={ajout} Data={Data} Zelda={Zelda} RDR={RDR} Cyber={Cyber} Mario={Mario} Witcher={Witcher} Fortnite={Fortnite} Harry={Harry} Tekken={Tekken} Mincraft={Mincraft} FinalF={FinalF} Assasin={Assasin} GrandV={GrandV}>View Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar bg-orange-600">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={Avatar} />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-600 rounded-box w-52">
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
      <div ref={rules} className='w-[500px] rounded-xl  flex-col justify-center items-center hidden absolute z-20 gap-10 pt-14'>
        <Secondcomp panier={panier} setPanier={setPanier} article={article} setChoix={setChoix} choix={choix} empty={empty} setEmpty={setEmpty} moins={moins} game={game} setGame={setGame} monny={monny} setMonny={setMonny} ajout={ajout} Data={Data} Zelda={Zelda} RDR={RDR} Cyber={Cyber} Mario={Mario} Witcher={Witcher} Fortnite={Fortnite} Harry={Harry} Tekken={Tekken} Mincraft={Mincraft} FinalF={FinalF} Assasin={Assasin} GrandV={GrandV}></Secondcomp>
      </div>

      <Navbar Logo={Logo} game={game} setshowNav={setshowNav} monny={monny} setMonny={setMonny} show={showNav}/>

<br />
<br />
<br />
      <div id="earth"></div>

    <div className=' w-[80%]  flex justify-center items-center'>
      <Firstcomp panier={panier} setPanier={setPanier} empty={empty} setEmpty={setEmpty} moins={moins} game={game} setGame={setGame} monny={monny} setMonny={setMonny} ajout={ajout} Data={Data} Zelda={Zelda} RDR={RDR} Cyber={Cyber} Mario={Mario} Witcher={Witcher} Fortnite={Fortnite} Harry={Harry} Tekken={Tekken} Mincraft={Mincraft} FinalF={FinalF} Assasin={Assasin} GrandV={GrandV}></Firstcomp>
    </div>
    <br />
    <br />
    <footer className="footer footer-center p-10 bg-black text-primary-content">
  <aside>
    <img className='h-44 w-44' src={Slog} alt="" />
    <p className="font-bold">
      ACME Industries Ltd. <br/>Providing reliable tech since 1992
    </p> 
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
    </div>
  )
}