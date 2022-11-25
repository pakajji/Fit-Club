import './Activity.css'

const Activity = ({activity,time,distance,set}) => {
    let activityColor
    switch (activity) {
        case 'walk':
            activityColor="blue"
        break;
        case 'run':
            activityColor="green"
        break;
        case 'bike':
            activityColor="yellow"
        break;
        case 'swim':
            activityColor="red"
        break;
        case 'hike':
            activityColor="purple"
        break;
        default : activityColor=""
    }

    return (
        <div className={`card ${activityColor}`}>
            <h2>{activity}</h2>
            <div className="activity-detail">
                <p>Description</p>
                <p>Date</p>
                <p>Numbar of set : {set}</p> 
                { distance && <p>Distance : {distance}</p>}
                <p>Calories burned</p>
                <p>Time : {time}</p>
                <p>Heart rate</p>
            </div>
        </div>
    )
}

export default Activity