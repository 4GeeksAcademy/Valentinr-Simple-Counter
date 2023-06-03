import React from "react";
import { useState } from 'react'

//create your first component
function  Thousand () {

    const [thousand, setThousand] = useState(0);
    
		const runTime = () => {
			setThousand(thousand + 1);
			}
     

    let intervalId		
		const initialize = () => {
			intervalId = setInterval(runTime, 100000)
			if(thousand > 9){
				clearInterval(intervalId)
				setThousand(0)
			}
		}
		initialize()
		
		return (
			<div className="clock-num">{thousand}</div>
		)
}
export default Thousand
