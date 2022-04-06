import React, { Component } from "react";
import '../style/Header.css'
import ProfilePicture from './ProfilePicture'
import Info from './Info'

class Header extends Component {
    constructor(){
      super();

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