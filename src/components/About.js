import React, { Component } from "react";
import '../style/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {
    constructor(props){
      super(props);
      this.state = {
        skill: { text: ''},
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        show: false,
        aboutEditToggle:  false    
      }

      this.onClickEditBtn = this.onClickEditBtn.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //functions for handling the buttons, mouse hovers, and form items
    onClickEditBtn() {
      this.setState({
        aboutEditToggle: this.state.infoEditToggle = true
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

    handleChange = (e) => {
      this.setState({
        skill : {
          text: e.target.value,
        }
      });
    };
    


    // A function to handle the info form when it is submitted or canceled.
    handleSubmit = (e) => {
      
      this.setState({
        about: this.state.about.concat(this.state.skill),
        skill: { text: '' },
        aboutEditToggle: this.state.aboutEditToggle = false
      })
      e.preventDefault();
    }
  
    render (){  
      const {
        skill,
        about,
        show,
        aboutEditToggle
     } = this.state;

     // an icon for the edit button  
     const editButton = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />

      return (         
           <div id="about" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
             <div id='aboutTitle'>About Me</div>
             <div className='aboutBar'></div>
             
             <div id='aboutText'>
                 {this.state.about}                  
            </div>
            { aboutEditToggle?<form id="aboutMeForm"><textarea onChange={this.handleChange}
             onMouseEnter={this.handleMouseExit} placeholder='Add a description of yourself' value={this.state.about} type="text" id="aboutMeTextArea" autoFocus /> 
            <button id='aboutSubmit' className='editButton' onClick={this.handleSubmit}>Submit</button></form>:null}
              {/* the button to edit the personal info. When pressed, it toggles the form for editing to show up */}
              { show?<button id="aboutEditButton" className='editButton'  onClick={this.onClickEditBtn}>Edit About Me {editButton}</button>:null}
           </div>
        )
    }
  }

  export default About;