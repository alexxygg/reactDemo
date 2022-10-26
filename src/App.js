//For using React.Fragment instead of a div all the time.
//We destructure to skip typing React.Fragment
import { Fragment } from "react";
//OR WE CAN SKIP IMPORT AND USE EMPTY OPENING AND
//CLOSING TAGS!!!

import Navbar from "./Navbar";
import List from "./List";
// import Counter from "./Counter";
import Counter from "./CounterClass";

function App() {
  let numbers = ["one", "two", "three", "four"];

  // let stuff = List({ title: "Numbers", items: numbers });

  return (
    <>
      <Navbar title="Starting with state" />
      <div className="container">
        <List title="Numbers" items={numbers} background="primary" />
        {/*  items=[{"one","two"}]         */}
        {/* <Counter startAt={0} countBy={1} /> */}
      </div>
    </>
  );
}

export default App;
//FOR EXPORTING MULTIPLE THINGS
//export App OR export default App().....

// props are read-onplay,  can not be modified
