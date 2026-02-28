// you should named this starting with capital letter as it need to be used as a component in the class based component.
import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User"
})

export default UserContext;