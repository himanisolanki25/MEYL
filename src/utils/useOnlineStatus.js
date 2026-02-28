import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        if(window.addEventListener("offline", (event)=>{
            setOnlineStatus(false);
        }));
        if(window.addEventListener("online", (event)=>{
            setOnlineStatus(true);
        }));
    },[])
    return onlineStatus;
}

export default useOnlineStatus;