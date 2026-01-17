import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h1 style={{color: "#dcdcdcff"}}>Oops!</h1>
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
}

export default Error;