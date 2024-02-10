
import { useState,useEffect } from 'react'

const Stopwatch = () => {
    const [time,setTime] = useState(0) 
    const [timeRunning,setTimeRunning] = useState(false) 

    const startStop = ()=>{
        setTimeRunning(!timeRunning);

    }
    const reset = ()=>{
        setTimeRunning(false)
        setTime(0)
    }
    
    useEffect(() => {
        let intervalId;
        if (timeRunning) {
          intervalId = setInterval(() => setTime(prev=>prev+1), 1000);
        }
        return () => clearInterval(intervalId);
      }, [timeRunning, time]);

    const timeFormat = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

    
  return (
    <div>
        <h1>Stopwatch</h1>
        <p>Time: {timeFormat(time)}</p>
        <div>
            <button onClick={startStop}> {timeRunning ? "Stop" : "Start"}</button>
            <button onClick={reset}>Reset</button>

        </div>

    </div>
  )
}

export default Stopwatch