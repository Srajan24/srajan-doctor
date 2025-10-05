import { useUser } from "@clerk/clerk-react";
import React from 'react'
import axios from 'axios';
import API_BASE_URL from "../config/api.js";

function CheckUser() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return <div>Please sign in</div>;
  }

  const userInfo = async() =>{
    try {
      const res = axios.post(`${API_BASE_URL}/api/user/check-user`, user)
      
    } catch (error) {
      
    }
  }

  return (
    <div>CheckUser</div>
  )
}

export default CheckUser