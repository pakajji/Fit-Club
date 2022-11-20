import './Navbar.css'
import { useContext, useState } from 'react'
import ProfliePopUp from '../ProfliePopUp/ProfliePopUp'
import MenuCalContext from '../Context/MenuCalContext'

const Navbar = () => {

    const {backgroundColor,setBackgroundColor} = useContext(MenuCalContext)

    //สลับปุ่ม Login กับ ProfilePic
    const [logIn, setLogIn] = useState(true)
    const showLogIn = logIn ? "hidden" : "show"
    let switchBtn = !logIn
    const showProfilePic = switchBtn ? "hidden" : "show"

    //Popup Profile
    const [profilePopUp, setProfilePopUp] = useState(false)
    const duringProfilePopUp = profilePopUp ? "" : "hiddenPopUp"

    return (
        <div className={`Navbar ${backgroundColor}`}>
            <ul>
                <li className='FitClub' onClick={()=>{ backgroundColor === 'light' ? setBackgroundColor('dark') : setBackgroundColor('light')}}>Fit Club</li>
                <li>Dashboard</li>
                <li>Dietary</li>
                <li>News</li>
            </ul>
            <img onClick={()=>setProfilePopUp(true)} className={`Profile_Pic ${showProfilePic}`} alt="Profile" src="https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188"/>
            <button className={`Login_btn ${showLogIn}`}>Log In</button>
            {profilePopUp && <ProfliePopUp duringProfilePopUp={duringProfilePopUp} setProfilePopUp={setProfilePopUp}/>}
        </div>
    )
}

export default Navbar