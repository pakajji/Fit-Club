import './AllActivity.css'
import Activity from '../Activity/Activity'
import AddActivityCard from '../AddActivityCard/AddActivityCrad'

const AllActivity = () => {
    //ตรงนี้รับข้อมูลจากหน้าActivityของพี่ไต๋ก๋ง
    const activity = [{
        activity: 'swim',
        time: 20,
        distance: 100,
        round: 2,
    },{
        activity: 'run',
        time: 30,
        distance: 50,
        round: 10,
    }]
    
    return (
        <div>
            <h2 className="Activity_Summary">Activity Summary</h2>
            <div className="AllActivity">
            {activity.map(detail => {
                return <Activity activity={detail.activity}
                                time={detail.time}
                                distance={detail.distance}
                                round={detail.round}/>  
            })}
            <AddActivityCard/>
            </div>
        </div>
    )
}

export default AllActivity