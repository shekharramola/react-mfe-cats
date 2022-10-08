import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
<Routes >

{/* <Switch> */}
<Route path="/" element= {<RandomCat />}/>
<Route path="/cat/:greeting" element= {<GreetingCat />}/>
  
{/* </Switch> */}
</Routes>
    </BrowserRouter>

  );
}

export default App;