import "./Navbar.css"
import SpaceGame from "./../../img/spaceGame.png"


const Navbar = ({show})  => {


    return (
        <div className={show ? 'sidenav active' : 'sidenav' }>
            <img  src={SpaceGame}></img>

            <ul className="text-center">
                <li>
                    <a href="/">Pannier</a>
                </li>
                <li>
                    <a href="/">About Us</a>
                </li>
                <li>
                    <a href="/">Contact Us</a>
                </li>
                
            </ul>

        </div>
    )

}

export default Navbar
