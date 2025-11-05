import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToHashElement = () => {
    const location = useLocation();
    useEffect(()=>{
        if(location.hash){
            setTimeout(()=>{
                const element = document.querySelector(location.hash);
                if(element){
                    element.scrollIntoView({behaviour:"smooth"});
                }
            },200)
        }
    },[location])
  return null;
}

export default ScrollToHashElement
