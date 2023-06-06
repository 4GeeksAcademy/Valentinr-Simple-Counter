import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [arrayCount, setArrayCount] = useState([]);

  useEffect(() => {
    const updateCount = () => {
      setCount((prevCount) => prevCount + 1);

      const countToArr = count.toString().padStart(4, "0").split("");
      setArrayCount(countToArr);
    };

    const timeout = setTimeout(updateCount, 1000);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div className="clock d-flex justify-content-center fs-5">
		<img src="https://cdn-icons-png.flaticon.com/512/2928/2928750.png"  alt="" />
		<div className="clock-num">{arrayCount[0]}</div>
		<div className="clock-num">{arrayCount[1]}</div>
		<div className="clock-num">{arrayCount[2]}</div>
     	<div className="clock-num">{arrayCount[3]}</div>
    </div>
  );
};

export default Home;


// import React from "react";
// import One from "./One.jsx";
// import Tens from "./Tens.jsx";
// import Hundreds from "./Hundreds.jsx";
// import Thousand from "./Thousand.jsx";
// import TenThousand from "./TenThousand.jsx";
// import HundredThousand from "./HundredThousand.jsx";


// //create your first component
// function  Home () {
	
// 	return (
// 	<div className="clock container-fluid">
// 		 <img src="https://cdn-icons-png.flaticon.com/512/2928/2928750.png"  alt="" />
// 		 <HundredThousand />
// 		 <TenThousand />
// 		 <Thousand />
// 		 <Hundreds />
// 		 <Tens />
// 		 <One /> 
// 	</div>
// 	);
// };
// export default Home;