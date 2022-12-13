import './AllActivity.css'
import Activity from '../Activity/Activity'
import AddActivityCard from '../AddActivityCard/AddActivityCrad'
import axios from 'axios';
import { useState , useEffect } from 'react'

const AllActivity = () => {
    
    const [activity, setActivity] = useState([])
    

    useEffect(() => async function getActivityCard() {
        try {
          const response = await axios.get('http://localhost:3000/activity');
          await console.log(response.data)
          await setActivity(response.data)
        } catch (error) {
          console.error(error);
        }
      }, [])

    return (
        <div>
            <h2 id="Dashboard" className="Activity_Summary">Activity Summary</h2>
            <div className="AllActivity">
            {activity.map(detail => {
                return <Activity type={detail.type}
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
            <AddActivityCard/>
            </div>
        </div>
    )
}

export default AllActivity