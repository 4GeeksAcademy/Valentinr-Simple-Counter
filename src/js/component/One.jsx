import React from "react";
import { useState, useEffect } from 'react'


//create your first component
function  One () {

	const [count, setCount] = useState(0)
	
	useEffect(() => {
	   setTimeout(() => {
		  setCount((count) => count + 1);
		}, 1000);
	});
	const init = () => {
		if(count > 9)
		setCount(0)
	}
	init()
	
	return (
	<div className="clock-num">{count}</div>
	);
};
export default One;
