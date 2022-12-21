import './ProfliePopUp.css'

const ProfliePopUp = (props) => {
    const { duringProfilePopUp,setProfilePopUp} = props 

    return (
        <div className={`Profile_popup ${duringProfilePopUp}`}>
            <span className="close_Profile_pop" onClick={()=> setProfilePopUp(false)}>&times;</span>
            <img className="Profile_Pic_popup" alt="Profile" src="https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188"/>
            <h2 className="Profile_popup_nickname">Nickname</h2>
            <h4 className="Profile_popup_username">Username</h4>
            <a className="Edit_Profile_pop_btn" target="_blank" rel="noopener noreferrer" href='/profile' onClick={()=> setProfilePopUp(false)}>Edit Profile</a>
            <a className="logout_pop_btn" href="/">Log out</a>
        </div>
        
    )
}

export default ProfliePopUp