import './ProfliePopUp.css'

const ProfliePopUp = (props) => {
    const { duringProfilePopUp,setProfilePopUp} = props 

    return (
        <div className={`Profile_popup ${duringProfilePopUp}`}>
            <span className="close_Profile_pop" onClick={()=> setProfilePopUp(false)}>&times;</span>
            <img className="Profile_Pic_popup" alt="Profile" src="https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188"/>
            <h2 className="Profile_popup_nickname">Nickname</h2>
            <h4 className="Profile_popup_username">Username</h4>
            <a className="Edit_Profile_pop_btn" type="submit" target="_blank" rel="noopener noreferrer" href='https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg' onClick={()=> setProfilePopUp(false)}>Edit Profile</a>
        </div>
        
    )
}

export default ProfliePopUp