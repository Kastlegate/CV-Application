import React, { Component } from "react";
import '../style/ProfilePicture.css'
import profilePicture from '../img/dog.jpg'

class ProfilePicture extends Component {
    constructor(){
        super();
        //creating a state that can be modified
        this.state = {
          //creating a photo in state
          picture: profilePicture
          
      }
    }
  
    render (){  
      const {
        picture
      } = this.state;
      // var profilePicture = picture;

      return ( 
        <img id="profilePicture" src={picture}></img> 
        )
    }
  }

  export default ProfilePicture;