import React from "react";
import { useState } from 'react'


//create your first component
function  One () {

    const [second, setSecond] = useState(0);
    
		const runTime = () => {
			setSecond(second + 1);
			}
     

    let intervalId		
		const initialize = () => {
			intervalId = setInterval(runTime, 1000)
			if(second > 9){
				clearInterval(intervalId)
				setSecond(0)
			}
		}
		initialize()

	return (
		
		 <div className="clock-num clock-last">{second}</div>
		
	);
};

export default One;
