import React, { Component } from "react";
import '../style/Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Education extends Component {
    constructor(props){
      super(props);
      this.state = {
        schoolName: '', 
        dateFrom: '', 
        dateTo: '', 
        location: '', 
        major: '', 
        minor: '',
        education: [{schoolName: 'Dog Gone Cutie University', dateFrom: '2019', dateTo: '2020', location: 'Puppy Town, USA', major: 'Potty Training Advanced', minor: 'Intro to fetching'}, {schoolName: 'Puppy Elementery', dateFrom: '2019', dateTo: '2019', location: 'Puppy Town, USA', major: 'Kenneling at bed time'}],
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

    handleSchoolChange = (e) => {
      this.setState({
        schoolName: e.target.value
      });
      console.log(this.state.schoolName)
    };

    handleDateFromChange = (e) => {
        this.setState({
          dateFrom: e.target.value
        });
      };

      handleDateToChange = (e) => {
        this.setState({
          dateTo: e.target.value
        });
      };

      handleLocationChange = (e) => {
        this.setState({
          location: e.target.value
        });
      };

      handleMajorChange = (e) => {
        this.setState({
          major: e.target.value
        });
      };

      handleMinorChange = (e) => {
        this.setState({
          minor: e.target.value
        });
      };
    


    // A function to handle the info form when it is submitted or canceled.
    handleSubmit = (e) => {
      
      this.setState({
        education: this.state.education.concat({
        schoolName: this.state.schoolName,
        dateFrom: this.state.dateFrom,
        dateTo: this.state.dateTo,
        location: this.state.location,
        major: this.state.major,
        minor: this.state.minor
        }),
        schoolName: '', from: '', to: '', location: '', major: '', minor: '',
        educationEditToggle: this.state.educationEditToggle = false
      })
      e.preventDefault();
    }
  
    render (){  
      const {
        schoolName, 
        dateFrom, 
        dateTo, 
        location, 
        major, 
        minor,
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
                              <div className='schoolItems'>{school.dateFrom} - {school.dateTo}</div>
                              <div className='schoolItems'>{school.location}</div>
                              <div className='schoolItems'>Major: {school.major}</div>
                              <div className='schoolItems'>Minor: {school.minor}</div>
                              </div>
                          </div>;
                    })}
                  
            </div>
            {/* form for adding schools to education */}
            { educationEditToggle?<form id='schoolForm' onMouseEnter={this.handleMouseExit} placeholder='Add' >
                <label htmlFor="schoolNameInput">School </label>
                <input className='' onChange={this.handleSchoolChange}
                type="text" id="schoolNameInput" autoFocus /> 
            <label htmlFor="dateFromInput">From </label>
                <input className='' onChange={this.handleDateFromChange}
             type="text" id="dateFromInput"/> 
            <label htmlFor="dateToInput">To </label>
                <input className='' onChange={this.handleDateToChange}
            type="text" id="dateToInput"/> 
             <label htmlFor="locationInput">Location </label>
                <input className='' onChange={this.handleLocationChange}
            type="text" id="locationInput"/> 
                <label htmlFor="majorInput">Major </label>
                <input className='' onChange={this.handleMajorChange}
            type="text" id="majorInput"/> 
                <label htmlFor="minorInput">Minor </label>
                <input className='' onChange={this.handleMinorChange}
            type="text" id="minorInput"/> 


            <button id='addSchoolButton' className='editButton' onClick={this.handleSubmit}>Add School</button>
            
            </form>:null}
              {/* the button to edit the school info. When pressed, it toggles the form for editing to show up */}
              { show?<button id="educationEditButton" className='editButton'  onClick={this.onClickEditBtn}>Edit School {editButton}</button>:null}
           </div>
        )
    }
  }

  export default Education;