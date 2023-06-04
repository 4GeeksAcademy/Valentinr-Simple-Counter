import React from "react";
import One from "./One.jsx";
import Tens from "./Tens.jsx";
import Hundreds from "./Hundreds.jsx";
import Thousand from "./Thousand.jsx";
import TenThousand from "./TenThousand.jsx";
import HundredThousand from "./HundredThousand.jsx";


//create your first component
function  Home () {
	
	return (
	<div className="clock container-fluid">
		 <img src="https://cdn-icons-png.flaticon.com/512/2928/2928750.png"  alt="" />
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