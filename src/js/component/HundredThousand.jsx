import React from "react";
import { useState } from 'react'

//create your first component
function  HundredThousand () {

    const [hundredThousand, setHundredThousand] = useState(0);
    
		const runTime = () => {
			setHundredThousand(hundredThousand + 1);
			}
     

    let intervalId		
		const initialize = () => {
			intervalId = setInterval(runTime, 10000000)
			if(hundredThousand > 9){
				clearInterval(intervalId)
				setHundredThousand(0)
			}
		}
		initialize()
		
		return (
			<div className="clock-num">{hundredThousand}</div>
		)
}
export default HundredThousand
