import React from "react";
import { useState } from 'react'

//create your first component
function  Hundreds () {

    const [hundreds, setHundreds] = useState(0);
    
		const runTime = () => {
			setHundreds(hundreds + 1);
			}
     

    let intervalId		
		const initialize = () => {
			intervalId = setInterval(runTime, 100000)
			if(hundreds > 9){
				clearInterval(intervalId)
				setHundreds(0)
			}
		}
		initialize()
		
		return (
			<div className="clock-num">{hundreds}</div>
		)
}
export default Hundreds
