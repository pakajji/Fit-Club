import React, { useState } from "react";
import UsersContext from "../UsersContext";
import { useEffect } from "react";
import axios from "axios";

const UsersContextProvider = ({ children }) => {
  return <UsersContext.Provider value={{}}>{children}</UsersContext.Provider>;
};

export default UsersContextProvider;
