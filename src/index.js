import React from "react";
import { createRoot }  from "react-dom/client";
import PrimeraApp from "./PrimeraApp";

import './index.css'
import CounterApp from "./CounterApp";


const divRoot = document.getElementById('app');
const root = createRoot(divRoot);
root.render( <PrimeraApp saludo="Hola, soy Goku" /> );
//ReactDOM.render( <CounterApp value={10}/>, divRoot );