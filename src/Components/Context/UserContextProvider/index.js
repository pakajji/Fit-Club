import React, { useState } from "react";
import UserContext from "../UserContext";
import axios from 'axios';

const UserContextProvider = ({children}) => {
  const [info, setInfo] = useState([])
  
  const getProfile = async () => {
    const information = await axios.get('http://localhost:3001/profile');
    setInfo(information.data)
  }

  getProfile()

    return (<UserContext.Provider value={{info}}>{children}</UserContext.Provider>)
}

export default UserContextProvider