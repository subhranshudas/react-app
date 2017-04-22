import React from "react";
import ReactDOM from "react-dom";
import Parent from "./components/Parent";
import Child from "./components/Child";

import "!style!css!sass!../sass/app.scss";

ReactDOM.render(<div><Parent/> <Child/></div> ,document.getElementById("app"));
