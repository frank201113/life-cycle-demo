import React, { useEffect, useState } from "react";
import "./App.css";
import Demo from "./Demo";

function App() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [inState, setInState] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      console.log("1. 触发 componentWillReceiveProps");
      setWidth(10);
      setHeight(20);
    }, 3000);

    setTimeout(() => {
      console.log("2. 触发 componentWillReceiveProps");
      setInState(200);
    }, 8000);
  }, []);

  return (
    <div className="App" data-state={inState}>
      <Demo width={width} height={height} />
    </div>
  );
}

export default App;
