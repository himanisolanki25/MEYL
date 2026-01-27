import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor")
  }
  componentDidMount() {
    // console.log("Parent Component did mount")
  }
  render() {
    // console.log("Parent render")
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>MEYL - meals, delivered!</h2>

        {/* <User name={"Himani Solanki (Functional)"} location={"Lucknow"}/> */}

        <UserClass
          name={"Himani Solanki (Class-based)"}
          location={"Lucknow Class"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>MEYL - meals, delivered!</h2>

//       {/* <User name={"Himani Solanki (Functional)"} location={"Lucknow"}/> */}

//       <UserClass
//         name={"Himani Solanki (Class-based)"}
//         location={"Lucknow Class"}
//       />
//     </div>
//   );
// };

export default About;


