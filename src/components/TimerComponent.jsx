import React from 'react'

const Timer = () => {
    const startTimeRef = useRef(0)
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now();
    }

    const stop = () => {
        setIsRunning(false);
    }

    const update = () => {
        const delta = Date.now() - startTimeRef.current;
        setTime(time + delta);
        startTimeRef.current = Date.Now
    }

    return(
        <div>

        </div>
    )
}

export default Timer