import React, { Component } from "react";
import '../style/Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Info extends Component {
    constructor(props){
      super(props);
       //creating a state that can be modified
      this.state = {
            name: '',
            phone: '',
            email: '',
            location: '',
            website: '',
            //creates a show prop in state
            show: false,
            infoEditToggle:  false    
        }

        this.onClickEditBtn = this.onClickEditBtn.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //  functions for handling the buttons, mouse hovers, and form items
    onClickEditBtn() {
      this.setState({
        infoEditToggle: this.state.infoEditToggle = true
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

    handleNameChange = (e) => {
        this.setState({
          name: e.target.value
      })
    }

    handlePhoneChange = (e) => {
        this.setState({
          phone: e.target.value
      })
    }

    handleEmailChange = (e) => {
      this.setState({
        email: e.target.value
    })
  }

    handleLocationChange = (e) => {
        this.setState({
          location: e.target.value
      })
   }

    handleWebsiteChange = (e) => {
        this.setState({
          website: e.target.value
      })
    }

      // A function to handle the info form when it is submitted or canceled.
      handleSubmit = (e) => {
        this.setState({
          infoEditToggle: this.state.infoEditToggle = false
        })
        e.preventDefault();
      }

    
    
    render (){  
      const {
        name,
        phone,
        email,
        location,
        website,
        show,
        infoEditToggle          
      } = this.state;
      
      // an icon for the edit button  
      const editButton = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
      
      return ( 
        // Creating the inital info div that contains the personal information or the edit form for it
       <div id="Info" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>

         {/* Form for the Personal Information area. Shows when the infoEditToggle is toggled true */}
         { infoEditToggle?<form id="infoForm" onMouseEnter={this.handleMouseExit}>           
          
          <label htmlFor="editName">Name </label>
           <input id="editName" type="text" placeholder="Enter your name" value={name}
           className='formItem' onChange={this.handleNameChange} autoFocus></input>
          <label htmlFor="editEmail">Email </label>
           <input id="editEmail" type="text" placeholder="Enter your Email" value={email}
           className='formItem' onChange={this.handleEmailChange}></input>         
          <label htmlFor="editPhone">Phone </label>
           <input id="editPhone" type="text" placeholder="Enter your Phone Number" value={phone}
           className='formItem' onChange={this.handlePhoneChange}></input>
           <label htmlFor="editLocation">Location </label>
           <input id="editLocation" type="text" placeholder="Enter your Location" value={location}
           className='formItem' onChange={this.handleLocationChange}></input>
           <label htmlFor="editWebsite">Website </label>
           <input id="editWebsite" type="text" placeholder="Enter your Website" value={website}
           className='formItem' onChange={this.handleWebsiteChange}></input>
          {/* submit and cancel buttons for the form  */}
           <div id='buttonContainer'><button className='infoButton' onClick={this.handleSubmit}>Submit</button><button className='infoButton' 
           onClick={this.handleSubmit}>Cancel</button></div>
          </form>:null}
         

         {/* the button to edit the personal info. When pressed, it toggles the form for editing to show up */}
         { show?<button id="infoEditButton" className='editButton'  onClick={this.onClickEditBtn}>Edit Info {editButton}</button>:null}

         {/* when the infoEditToggle is false, displays the current information for the Info Section */}
         { !infoEditToggle?<div>
            <div id="name" >{name ? name: 'Freyja Weya'}</div>
            <div id="phone" className='infoItem'>Phone: {phone ? phone: '555-555-5555'}</div>
            <div id="email" className='infoItem'>Email: {email ? email: 'Freyja@fakePuppyEmail.com'}</div>
            <div id="location" className='infoItem'>Location: {location ? location: 'Kennel, Kentucky'}</div>
            <div id="website" className='infoItem'>Website: {website ? website: 'puppiesCannot make websites... Dot Com'}</div>
          </div>:null}         
       </div>
        )
    }
  }

  export default Info;