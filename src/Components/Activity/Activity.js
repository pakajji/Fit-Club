import './Activity.css'
import { useContext } from 'react'
import ActivityContext from '../Context/ActivityContext';

const Activity = ({ id, type, description, date, time, numberset, distance, calburned, duration, heartrate, onDelete }) => {
    
    let activityColor
    switch (type) {
        case 'walk':
            activityColor = "blue"
            break;
        case 'run':
            activityColor = "green"
            break;
        case 'bicycleride':
            activityColor = "yellow"
            break;
        case 'swimming':
            activityColor = "red"
            break;
        case 'hiking':
            activityColor = "purple"
            break;
        default: activityColor = ""
    }

    let hour = Math.floor(duration/60)
    let minute = duration%60

    const { removeActivity} = useContext(ActivityContext)


    return (
        <div className={`activity-card ${activityColor}`}>
            <h2>{type}</h2>
            <div className="activity-detail">
                <p>{description}</p>
                <p>{date} | {time}</p>
                {numberset !== 0 && <p>Number of set : {numberset}</p>}
                {distance && <p>Distance : {distance}</p>}
                <p>Duration : {hour >= 1 && <span>{hour} hr</span>} {minute !== 0 && <span>{minute} min</span>}</p>
                <p>Burned {calburned} cals</p>
                {heartrate && <p>Heartrate : {heartrate}</p>}
            </div>
            <div className='edit-delete-card'>
                <span>{date} | {time}</span>
                <div>
                    <img alt='edit' src='http://cdn.onlinewebfonts.com/svg/img_221007.png'/>
                    <img onClick={()=>removeActivity(id)} alt='delete' src='https://cdn-icons-png.flaticon.com/512/39/39220.png'/>
                </div>
            </div>
        </div>
    )
}

export default Activity