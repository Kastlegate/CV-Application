import React, { Component } from "react";
import '../style/Header.css'
import ProfilePicture from './ProfilePicture'
import Info from './Info'

class Header extends Component {
    constructor(props){
      super(props);
      
    }
  
    render (){  

      return (         
        <div className="Header">
            <ProfilePicture />
            <Info />
        </div>           
        )
    }
  }

  export default Header;