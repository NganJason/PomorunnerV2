import {useState, useEffect} from "react"

const useClock = () => {
    const [currTime, setCurrTime] = useState(getCurrTime())

    useEffect(() => {
        setInterval(()=>{
            setCurrTime(getCurrTime())
        }, 1000)
    })

    return {currTime}
}

const getCurrTime = () => {
    var today = new Date()

    var hours = today.getHours().toString().padStart(2, "0");
    var minutes = today.getMinutes().toString().padStart(2, "0")

    return hours + ":" + minutes
}

export default useClock