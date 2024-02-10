
import { useState,useEffect } from 'react'

const Stopwatch = () => {
    const [time,setTime] = useState(0) 
    const [timeRunning,setTimeRunning] = useState(false) 

    const startStop = ()=>{
        setTimeRunning(!timeRunning);

    }
    const reset = ()=>{
        setTime(0)
    }
    
    useEffect(() => {
        let intervalId;
        if (timeRunning) {
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
      }, [timeRunning, time]);

    const minutes = Math.floor((time % 360000) / 6000);

  
    const seconds = Math.floor((time % 6000) / 100);

    
  return (
    <div>
        <h1>Stopwatch</h1>
        <p>Time: {minutes.toString().padStart(1, "0")}:
        {seconds.toString().padStart(2, "0")}</p>
        <div>
            <button onClick={startStop}> {timeRunning ? "Stop" : "Start"}</button>
            <button onClick={reset}>Reset</button>

        </div>

    </div>
  )
}

export default Stopwatch