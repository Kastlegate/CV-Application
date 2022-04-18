import React, { Component } from "react";
import '../style/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Skills extends Component {
    constructor(props){
      super(props);
      this.state = {
        skill: { text: ''},
        skills: [{text: 'Destroying toys'}, {text: 'Waking up Parents'}, {text: 'Smelling Everything'}, {text: 'Catching balls when they are thrown'}, {text: 'Licking you'}],
        show: false,
        skillsEditToggle:  false    
      }

      this.onClickEditBtn = this.onClickEditBtn.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //functions for handling the buttons, mouse hovers, and form items
    onClickEditBtn() {
      this.setState({
        skillsEditToggle: this.state.skillsEditToggle = true
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
        skills: this.state.skills.concat(this.state.skill),
        skill: { text: '' },
        skillsEditToggle: this.state.skillsEditToggle = false
      })
      e.preventDefault();
    }
  
    render (){  
      const {
        skill,
        skills,
        show,
        skillsEditToggle
     } = this.state;

     // an icon for the edit button  
     const editButton = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />

      return (         
           <div id="skills" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
             <h1 id='SkillsTitle'>Skills</h1>
             <div className='skillsBar'></div>
             <div id='SkillsContainer'>
                
                    {skills.map((skill) => {
                      return <div className='skillsClass'>{skill.text}</div>;
                    })}
                  
            </div>
            { skillsEditToggle?<form><input onChange={this.handleChange}
             onMouseEnter={this.handleMouseExit} placeholder='Add a skill' value={skill.text} type="text" id="skillInput" autoFocus /> 
            <button className='editButton' onClick={this.handleSubmit}>Add Skill</button></form>:null}
              {/* the button to edit the personal info. When pressed, it toggles the form for editing to show up */}
              { show?<button id="skillsEditButton" className='editButton'  onClick={this.onClickEditBtn}>Edit Skills {editButton}</button>:null}
           </div>
        )
    }
  }

  export default Skills;