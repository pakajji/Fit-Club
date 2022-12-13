import './Activity.css'

const Activity = ({ type, description, date, time, numberset, distance, calburned, duration, heartrate }) => {
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

    return (
        <div className={`activity-card ${activityColor}`}>
            <h2>{type}</h2>
            <div className="activity-detail">
                <p>{description}</p>
                <p>{date} | {time}</p>
                {numberset && <p>Numbar of set : {numberset}</p>}
                {distance && <p>Distance : {distance}</p>}
                <p>Duration : {duration}</p>
                <p>Burned {calburned} cals</p>
                {heartrate && <p>Heartrate : {heartrate}</p>}
            </div>
        </div>
    )
}

export default Activity