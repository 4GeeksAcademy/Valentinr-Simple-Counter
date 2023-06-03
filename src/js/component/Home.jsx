import React from "react";
import { useState } from 'react'
import One from "./One.jsx";
import Tens from "./Tens.jsx";
import Hundreds from "./Hundreds.jsx";
import Thousand from "./Thousand.jsx";
import TenThousand from "./TenThousand.jsx";
import HundredThousand from "./HundredThousand.jsx";


//create your first component
function  Home () {
	return (
		<div className="text-center clock-content bg-dark d-flex justify-content-center align-items-center">
		 <div className="clock"> <img src="https://cdn-icons-png.flaticon.com/512/2928/2928750.png"  alt="" /> </div>
		 <HundredThousand />
		 <TenThousand />
		 <Thousand />
		 <Hundreds />
		 <Tens />
		 <One />
		</div>
	);
};
export default Home;
