import React, { useState } from "react";
import ActivityContext from "../ActivityContext";
import { useEffect } from "react"
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost3000',
  withCredentials: true,
  validateStatus: ()=>true
})

const ActivityContextProvider = ({children}) => {
    
    const [activities,setActivities] = useState([])

    //เพิ่ม/อัพเดตการ์ดactivity
    const addActivity = async (activity) => {
            await axios.put(`http://localhost:3000/activity/${activity.id}`, activity);
            setShouldUpdate(true)
    }

    //ลบการ์ดactivity
    const removeActivity = async (id) => {
            await axios.delete(`http://localhost:3000/activity/${id}`);
            setShouldUpdate(true)
    }


    const [runDuration, setRunDuration] = useState([])
    const [walkDuration, setWalkDuration] = useState([])
    const [swimmingDuration, setSwimmingDuration] = useState([])
    const [bicyclerideDuration, setBicyclerideDuration] = useState([])
    const [hikingDuration, setHikingDuration] = useState([])

    //อัพเดทกราฟพาย
    const activitiesDuration = async () => {
      const run = await axios.get('http://localhost:3000/activity/run');
      setRunDuration(run.data)
      const walk = await axios.get('http://localhost:3000/activity/walk');
      setWalkDuration(walk.data)
      const swimming = await axios.get('http://localhost:3000/activity/swimming');
      setSwimmingDuration(swimming.data)
      const bicycleride = await axios.get('http://localhost:3000/activity/bicycleride');
      setBicyclerideDuration(bicycleride.data)
      const hiking = await axios.get('http://localhost:3000/activity/hiking');
      setHikingDuration(hiking.data)
    }

    const [shouldUpdate, setShouldUpdate] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => { 
        if (shouldUpdate){
            setShouldUpdate(false)
            setIsLoading(true)
        async function getActivityCard() {
        try {
          const activity = await axios.get('http://localhost:3000/activity');
          setActivities(activity.data)
          activitiesDuration()
          setIsLoading(false)
        } catch (error) {
          console.error(error);
          setIsLoading(false)
        }
      }
      getActivityCard()
    }}, [shouldUpdate])

    return (<ActivityContext.Provider value={{
        activities,setActivities,addActivity,
        isLoading,setShouldUpdate,
        removeActivity,
        runDuration,walkDuration,swimmingDuration,bicyclerideDuration,hikingDuration
    }}>{children}</ActivityContext.Provider>)
}

export default ActivityContextProvider