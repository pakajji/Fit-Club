import './Navbar.css'
import { useState } from 'react'
import ProfliePopUp from '../ProfliePopUp/ProfliePopUp'

const Navbar = () => {

    //สลับปุ่ม Login กับ ProfilePic
    const [logIn, setLogIn] = useState(true)
    const showLogIn = logIn ? "hidden" : "show"
    let switchBtn = !logIn
    const showProfilePic = switchBtn ? "hidden" : "show"

    //Popup Profile
    const [profilePopUp, setProfilePopUp] = useState(false)
    const duringProfilePopUp = profilePopUp ? "" : "hiddenPopUp"

    //Hamburger-list
   const [hamburgerList, setHamburgerList] = useState('hidden')


    return (
    <div className="Navbar">
        <div id='Hamburger'>
            <img onClick={()=> {hamburgerList === 'hidden' ? setHamburgerList('show-flex') : setHamburgerList('hidden')}} alt='hamburger' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'/>
            <ul className={`ham-list ${hamburgerList}`}>
                <li className='Ham-pic-login'>
                    <img className={`Profile_Pic_Ham ${showProfilePic}`} alt="Profile" src="https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188"/>
                    <button className={`Login_btn ${showLogIn}`}>Log In</button>
                </li>
                <li><a href="#Dashboard">Dashboard</a></li>
                <li><a href="#Dietary">Dietary</a></li>
            </ul>
        </div>

        <div id='notHamburger'>
            <ul>
                <li className='FitClub'><a href="#">Fit Club</a></li>
                <li><a href="#Dashboard">Dashboard</a></li>
                <li><a href="#Dietary">Dietary</a></li>
            </ul>
            <img onClick={()=>setProfilePopUp(true)} className={`Profile_Pic ${showProfilePic}`} alt="Profile" src="https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188"/>
            <button className={`Login_btn ${showLogIn}`}>Log In</button>
            {profilePopUp && <ProfliePopUp duringProfilePopUp={duringProfilePopUp} setProfilePopUp={setProfilePopUp}/>}
        </div>
    </div>
    )
}

export default Navbar