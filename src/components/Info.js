import React, { Component } from "react";
import '../style/Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Info extends Component {
    constructor(props){
      super(props);
       //creating a state that can be modified
      this.state = {
            //creating values inside state
            name: '',
            phone: '',
            email: '',
            location: '',
            website: '',
            //creates a show prop in state
            show: false,
            infoEditToggle:  false    
        }

        this.onClickBtn = this.onClickBtn.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    onClickBtn() {
      console.log('Button has been clicked!');
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

    console.log(this.state.name)
    }

    handleSubmit(e) {
      infoEditToggle: this.state.infoEditToggle = false
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
           <input id="editName" type="text" placeholder="Enter your name" onChange={this.handleNameChange}></input>
           <button onClick={this.handleSubmit}>Submit</button>
          </form>:null}
         

         {/* the button to edit the info. when pressed, it toggles the form for editing to show up */}
         { show?<button id="infoEditButton" className='editButton'  onClick={this.onClickBtn}>Edit Info {editButton}</button>:null}

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