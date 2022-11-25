import './AllActivity.css'
import Activity from '../Activity/Activity'
import AddActivityCard from '../AddActivityCard/AddActivityCrad'

const AllActivity = () => {
    //ตรงนี้รับข้อมูลจากหน้าActivityของพี่ไต๋ก๋ง
    const activity = [{
        activity: 'swim',
        time: 20,
        distance: 100,
        set: 2
    },{
        activity: 'run',
        time: 30,
        distance: 50,
        set: 10
    }]
    
    return (
        <div>
            <h2 id="Dashboard" className="Activity_Summary">Activity Summary</h2>
            <div className="AllActivity">
            {activity.map(detail => {
                return <Activity activity={detail.activity}
                                time={detail.time}
                                distance={detail.distance}
                                set={detail.set}/>  
            })}
            <AddActivityCard/>
            </div>
        </div>
    )
}

export default AllActivity