import React, { Component } from "react";
import '../style/ProfilePicture.css'
import profilePicture from '../img/dog.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProfilePicture extends Component {
    constructor(){
        super();
        //creating a state that can be modified
        this.state = {
          //creating a photo in state
          picture: profilePicture,
          show: false,
          editPictureToggle: false       
      }
      this.onClickEditBtn = this.onClickEditBtn.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    //functions for handling the buttons, mouse hovers, and form items
    onClickEditBtn() {
      this.setState({
        
      })
  }
  
  handleMouseEnter = () => {
    this.setState({
      show: this.state.show = true
    })

  }

  handleMouseExit = () => {
    this.setState({
      show: this.state.show = false
    })
  }

  handleSubmit = (e) => {
      
    this.setState({
     
      })

    // e.preventDefault();
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({picture: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

    render (){  
      const {
        picture,
        show
      } = this.state;
     
    // an icon for the edit button  
    const editButton = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />

      return (
        <div id="pictureContainer"  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>          
        <img id="profilePicture" src={picture}></img>
       
       { show?<div><label htmlFor="choosePicture" className='editButton' id="pictureEditButton">
        Edit Photo {editButton}
        </label>
        <input type="file" id='choosePicture' onChange={this.onImageChange}  />
        
        </div>:null}
        </div>
      )
    }
  }

  export default ProfilePicture;