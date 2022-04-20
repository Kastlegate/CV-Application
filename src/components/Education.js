import React, { Component } from "react";
import '../style/Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Education extends Component {
    constructor(props){
      super(props);
      this.state = {
        school: { schoolName: ''},
        education: [{schoolName: 'Dog Gone Cutie University', from: '2019', to: '2020', location: 'Puppy Town, USA', major: 'Potty Training Advanced', minor: 'Intro to fetching'}, {schoolName: 'Puppy Elementery', from: '2019', to: '2019', location: 'Puppy Town, USA', major: 'Kenneling at bed time'}],
        show: false,
        educationEditToggle:  false    
      }

      this.onClickEditBtn = this.onClickEditBtn.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //functions for handling the buttons, mouse hovers, and form items
    onClickEditBtn() {
      this.setState({
        educationEditToggle: this.state.educationEditToggle = true
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
        school : {
          text: e.target.value,
        }
      });
    };
    


    // A function to handle the info form when it is submitted or canceled.
    handleSubmit = (e) => {
      
      this.setState({
        education: this.state.education.concat(this.state.school),
        school: { text: '' },
        educationEditToggle: this.state.educationEditToggle = false
      })
      e.preventDefault();
    }
  
    render (){  
      const {
        school,
        education,
        show,
        educationEditToggle
     } = this.state;

     // an icon for the edit button  
     const editButton = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />

      return (         
           <div id="education" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
             <div id='educationTitle'>Education</div>
             <div className='aboutBar'></div>
             <div id='educationContainer'>

                    {education.map((school) => {
                      return <div className='schoolContainer'>
                          <div className='schoolName'>{school.schoolName}</div>
                          <div className='schoolInfo'>
                              <div className='schoolItems'>{school.from} - {school.to}</div>
                              <div className='schoolItems'>{school.location}</div>
                              <div className='schoolItems'>Major: {school.major}</div>
                              <div className='schoolItems'>Minor: {school.minor}</div>
                              </div>
                          </div>;
                    })}
                  
            </div>
            { educationEditToggle?<form><input onChange={this.handleChange}
             onMouseEnter={this.handleMouseExit} placeholder='Add' value={school.text} type="text" id="schoolInput" autoFocus /> 
            <button className='editButton' onClick={this.handleSubmit}>Add School</button></form>:null}
              {/* the button to edit the personal info. When pressed, it toggles the form for editing to show up */}
              { show?<button id="educationEditButton" className='editButton'  onClick={this.onClickEditBtn}>Edit School {editButton}</button>:null}
           </div>
        )
    }
  }

  export default Education;