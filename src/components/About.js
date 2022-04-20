import React, { Component } from "react";
import '../style/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {
    constructor(props){
      super(props);
      this.state = {
        about: '',
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
        about: e.target.value
      });
    };
    


    // A function to handle the info form when it is submitted or canceled.
    handleSubmit = (e) => {
      
      this.setState({        
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
             
             { !aboutEditToggle?<div id='aboutText'>
                 {this.state.about ? about: "I am a dog. A like to tear up toys. I have two sisters. They are cats. I like to annoy them. Somedays I like to sneak mud into the house on my paws. No one suspects me."}                  
            </div>:null}
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