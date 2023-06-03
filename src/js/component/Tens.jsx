import React from "react";
import { useState } from 'react'

//create your first component
function  Tens () {

    const [tens, setTens] = useState(0);
    
		const runTime = () => {
			setTens(tens + 1);
			}
     

    let intervalId		
		const initialize = () => {
			intervalId = setInterval(runTime, 10000)
			if(tens > 9){
				clearInterval(intervalId)
				setTens(0)
			}
		}
		initialize()
		
		return (
			<div className="clock-num">{tens}</div>
		)
}
export default Tens
