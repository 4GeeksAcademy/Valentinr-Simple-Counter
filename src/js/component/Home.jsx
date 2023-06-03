import React, { useEffect } from "react";
import { useState } from 'react'

//create your first component
function  Home () {

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
		<div className="text-center clock-content bg-dark d-flex justify-content-center align-items-center">
		 <div className="clock"> <img src="https://cdn-icons-png.flaticon.com/512/2928/2928750.png"  alt="" /> </div>
		 <div className="clock-num">0</div>
		 <div className="clock-num">0</div>
		 <div className="clock-num">0</div>
		 <div className="clock-num">0</div>
		 <div className="clock-num">0</div>
		 <div className="clock-num clock-last">{second}</div>
		</div>
	);
};

export default Home;
