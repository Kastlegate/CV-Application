import React, { Component } from "react";
import '../style/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import uniqid from "uniqid";

class Skills extends Component {
    constructor(props){
      super(props);
      this.state = {
        skill: {  id: uniqid(), text: '' },
        skills: [{id: uniqid(), text: 'Destroying toys'}, {id: uniqid(), text: 'Waking up Parents'}, {id: uniqid(), text: 'Smelling Everything'}, {id: uniqid(), text: 'Catching balls when they are thrown'}, {id: uniqid(), text: 'Licking you'}],
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
          id: this.state.skill.id,
        }
      });
    }
    // Uses filter, for arrays, to create a new array without the skill.id and assign the new array to the skills array 
    removeSkill = (id) => {
      this.setState({
        skills: this.state.skills.filter((x) => x.id !== id)
      })
    }
    
    // A function to handle the info form when it is submitted or canceled.
    handleSubmit = (e) => {
      
      this.setState({
        skills: this.state.skills.concat(this.state.skill),
        skill: { id: uniqid(), text: '' },
        skillsEditToggle: this.state.skillsEditToggle = false
      })
      e.preventDefault();
    }
  
    render (){  
      const {
        skill,
        skills,
        show,
        skillsEditToggle,
        showDeleteButtons
     } = this.state;

     // an icon for the edit button  
     const editButton = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />

     // an icon for a trash can for the delete button
     const trash = <FontAwesomeIcon icon="fa-solid fa-trash-can" />

      return (         
           <div id="skills" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
             <h1 id='SkillsTitle'>Skills</h1>
             <div className='skillsBar'></div>
             <div id='SkillsContainer'>
                
                    {skills.map((skill) => {
                      return <div key={skill.id} className='skillsClass'>{show?<div className="trashCanSkills" onClick={() => this.removeSkill(skill.id)} >{trash}</div>:null} <div>{skill.text}</div> </div>;
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