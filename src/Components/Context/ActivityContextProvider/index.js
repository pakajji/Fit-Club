import React, { useState } from "react";
import ActivityContext from "../ActivityContext";
import { useEffect } from "react"
import axios from 'axios';

const ActivityContextProvider = ({children}) => {
    
    const [activities,setActivities] = useState([])

    const addActivity = async (activity) => {
            await axios.put('http://localhost:3000/activity', activity);
            setShouldUpdate(true)
    }

    const removeActivity = async (id) => {
            await axios.delete(`http://localhost:3000/activity/${id}`);
            setShouldUpdate(true)
    }

    const [shouldUpdate, setShouldUpdate] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => { 
        if (shouldUpdate){
            setShouldUpdate(false)
            setIsLoading(true)
        async function getActivityCard() {
        try {
          const response = await axios.get('http://localhost:3000/activity');
          setActivities(response.data)
          setIsLoading(false)
        } catch (error) {
          console.error(error);
          setIsLoading(false)
        }
      }
      getActivityCard()
    }}, [shouldUpdate])

    return (<ActivityContext.Provider value={{
        activities,setActivities,addActivity,isLoading,setShouldUpdate,removeActivity
    }}>{children}</ActivityContext.Provider>)
}

export default ActivityContextProvider