import React from 'react'
import '../homepage/homepage.css'

const Homepage = ({setLoginUser}) => {
    return(
        <div className="homepage">
           <h1>Hello Home Page</h1>
           <div className="button" onClick={() => {setLoginUser({})}}>Logout</div> 
        </div>
    )
}

export default Homepage