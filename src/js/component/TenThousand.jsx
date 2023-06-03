import React from "react";
import { useState } from 'react'

//create your first component
function  TenThousand () {

    const [tenThousand, setTenThousand] = useState(0);
    
		const runTime = () => {
			setTenThousand(tenThousand + 1);
			}
     

    let intervalId		
		const initialize = () => {
			intervalId = setInterval(runTime, 1000000)
			if(tenThousand > 9){
				clearInterval(intervalId)
				setTenThousand(0)
			}
		}
		initialize()
		
		return (
			<div className="clock-num">{tenThousand}</div>
		)
}
export default TenThousand
