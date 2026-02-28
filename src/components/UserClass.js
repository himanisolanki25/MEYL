import React from "react";

class UserClass extends React.Component {
    // constructor is called everytime an instance is created
    constructor(props){
        super(props);
        this.state = {
            // count: 0,
            // count2: 2
            userInfo: {
              name: "Default name",
              location: "Default location",
              imageUrl: "Default url"
            }
        }
        // console.log("Child constructor")
    }
    async componentDidMount(){
        // console.log("Child Component did mount")
        const data = await fetch("https://api.github.com/users/himanisolanki25")
        const json = await data.json();

        console.log(json)

        this.setState({
          userInfo:json
        })

        // this.timer = setInterval(()=>{
        //   console.log("I will be called even if you route to something else")
        // },1000)
    }
    componentDidUpdate(){
      console.log("Component did update")
    }
    componentWillUnmount(){
      console.log("This function is called just before our component is unmounting")
      // need to call setInterval
      // clearInterval(this.timer);
    }

  render() {
    // console.log("Child render")
    // const {name, location} = this.props
    // const {count} = this.state
    const {name, location, avatar_url} = this.state.userInfo
    return (
      <div className="user-card">
        {/* <h3>Count: {count}</h3> */}
        {/* <h3>Count: {this.state.count2}</h3> */}
        {/* NEVER UPDATE STATE VARIABLES DIRECTLY */}
        {/* <button onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
        }}>Increase Count</button> */}
        <img src={avatar_url}/>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>Contact: @himanisolanki25</h3>
        
      </div>
    );
  }
}

export default UserClass;


// Lifecycle

// Mounting
  // constructor (dummy) called
  // render called with the default data
    // html (default data >)
  // componentDidMount called
    // api is called
    // (this.setState) -> state variables are updated.

// Update
  // render(api date)
  // html (new api data>)
  // componentDidUpdate called

// Unmounting