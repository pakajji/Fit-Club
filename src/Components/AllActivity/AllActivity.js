import './AllActivity.css'
import Activity from '../Activity/Activity'
import AddActivityCard from '../AddActivityCard/AddActivityCrad'
import { useContext } from 'react'
import ActivityContext from '../Context/ActivityContext';

const AllActivity = () => {

    const { activities, isLoading } = useContext(ActivityContext)

    return (
        <div>
            <h2 id="Dashboard" className="Activity_Summary">Activity Summary</h2>
            <div className="AllActivity">
                {!isLoading && activities.map(detail => {
                    return <Activity id={detail.id}
                        key={detail.id}
                        title={detail.title}
                        type={detail.type}
                        description={detail.description}
                        date={detail.date}
                        time={detail.time}
                        numberset={detail.numberset}
                        distance={detail.distance}
                        calburned={detail.calburned}
                        duration={detail.duration}
                        heartrate={detail.heartrate}
                    />
                })}
                <AddActivityCard />
            </div>
        </div>
    )
}

export default AllActivity