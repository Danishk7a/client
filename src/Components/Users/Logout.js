import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Logout = () => {
  const [first, setFirst] = useState(0)
  const navilogout =  useNavigate()  
  
  useEffect(()=>{

        axios.get('http://64.227.140.80/api/logout')
        .then(function (response) {
           
        })

        navilogout('/')

    },[])
   
    return (
  <>
 
  
  </> 
   
   
    
    )
}

export default Logout