import './Activity.css'

const Activity = ({activity,time,distance,round}) => {
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
            <p>Time : {time}</p>
            <p>Distance : {distance}</p>
            <p>Round : {round}</p>
        </div>
    )
}

export default Activity