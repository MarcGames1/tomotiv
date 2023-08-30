'use client'
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

import {FcCheckmark} from 'react-icons/fc'

const Mesajelement = ({ text = <></>, start = false, delay=" ", animation =" " }) => {

    const [classes, setClasses] = useState()

    const ref = useRef();
    const isVisible = useIsVisible(ref);

useEffect(()=>{
setClasses(setStyles())
}, [isVisible]) 

    const setStyles = () =>{
        return `chat ${start ? 'chat-start' : 'chat-end'} `;
    }
  
  return (
    <>
      <div ref={ref} className={`${classes} `}>
        <div
          className={`flex items-center chat chat-bubble ${
            isVisible
              ? `${
                 animation
                } animate-once animate-duration-600 animate-fill-both ${delay} visible	`
              : 'invisible'
          }`}
        >
         <FcCheckmark /> {text}
        </div>
      </div>
    </>
  );
};



export default Mesajelement;