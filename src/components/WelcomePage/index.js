import React, {useContext} from 'react';
import {LoginContext} from '../../components/userDataContext.js';
import "../../components/WelcomePage/index.css";

function WelcomePage(){
    
    const {data} = useContext(LoginContext);
    return (
        <div className="welcomeContainer">
            <h1 className="headerWelcome"> Welcome to Tessel  {data.Name}! </h1>
        </div>
        
        
    )
}

export default WelcomePage;