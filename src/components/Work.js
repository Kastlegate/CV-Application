import React, { Component } from "react";
import '../style/Work.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import uniqid from "uniqid";

class Work extends Component {
    constructor(props){
      super(props);
      this.state = {
        company: '', 
        dateFrom: '', 
        dateTo: '', 
        location: '', 
        position: '',
        work: [{id: uniqid(), company: 'Black Lab-oratories', dateFrom: '2020', dateTo: '2022', location: 'Kenneltucky, USA', position: 'Senior Treat Taster'}],
        show: false,
        workEditToggle:  false    
      }

      this.onClickEditBtn = this.onClickEditBtn.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //functions for handling the buttons, mouse hovers, and form items
    onClickEditBtn() {
      this.setState({
        workEditToggle: this.state.workEditToggle = true
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

    handleCompanyChange = (e) => {
      this.setState({
        company: e.target.value
      });
    };

    handleWorkDateFromChange = (e) => {
        this.setState({
          dateFrom: e.target.value
        });
      };

      handleWorkDateToChange = (e) => {
        this.setState({
          dateTo: e.target.value
        });
      };

      handleWorkLocationChange = (e) => {
        this.setState({
          location: e.target.value
        });
      };

      handlePositionChange = (e) => {
        this.setState({
          position: e.target.value
        });
      };

      removeWork = (id) => {
        this.setState({
          work: this.state.work.filter((x) => x.id !== id)
        })
      }

    // A function to handle the info form when it is submitted or canceled.
    handleSubmit = (e) => {
      
      this.setState({
        work: this.state.work.concat({
        id: uniqid(),
        company: this.state.company,
        dateFrom: this.state.dateFrom,
        dateTo: this.state.dateTo,
        location: this.state.location,
        position: this.state.position
        }),
        company: '', from: '', to: '', location: '', position: '',
        workEditToggle: this.state.workEditToggle = false
      })
      e.preventDefault();
    }
  
    render (){  
      const {
        company, 
        dateFrom, 
        dateTo, 
        location, 
        position,
        work,
        show,
        workEditToggle
     } = this.state;

     // an icon for the edit button  
     const editButton = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
     // an icon for a trash can for the delete button
     const trash = <FontAwesomeIcon icon="fa-solid fa-trash-can" />

      return (         
           <div id="workHistory" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
             <div id='workTitle'>Experience</div>
             <div className='aboutBar'></div>
             <div id='workContainer'>

                    {work.map((work) => {
                      return <div className='workContainer' key={work.id}>
                          <div className="deleteSchoolClass"><div className='company'>{work.company}</div> {show?<div className="trashCan" onClick={() => this.removeWork(work.id)} >{trash}</div>:null}</div>
                          <div className='workInfo'>
                              <div className='workItems'>{work.dateFrom} - {work.dateTo}</div>
                              <div className='workItems'>{work.location}</div>
                              <div className='workItems'>{work.position}</div>
                              </div>
                          </div>;
                    })}
                  
            </div>
            {/* form for adding schools to education */}
            { workEditToggle?<form id='workForm' onMouseEnter={this.handleMouseExit} placeholder='Add' >
                <label htmlFor="companyInput">Company </label>
                <input className='' onChange={this.handleCompanyChange}
                type="text" id="companyInput" autoFocus /> 
            <label htmlFor="workDateFromInput">From </label>
                <input className='' onChange={this.handleWorkDateFromChange}
             type="text" id="workDateFromInput"/> 
            <label htmlFor="workDateToInput">To </label>
                <input className='' onChange={this.handleWorkDateToChange}
            type="text" id="workDateToInput"/> 
             <label htmlFor="workLocationInput">Location </label>
                <input className='' onChange={this.handleWorkLocationChange}
            type="text" id="workLocationInput"/> 
                <label htmlFor="positionInput">Position </label>
                <input className='' onChange={this.handlePositionChange}
            type="text" id="positionInput"/> 
            
            <button id='addWorkButton' className='editButton' onClick={this.handleSubmit}>Add Work History</button>
            
            </form>:null}
              {/* the button to edit the school info. When pressed, it toggles the form for editing to show up */}
              { show?<button id="educationEditButton" className='editButton'  onClick={this.onClickEditBtn}>Edit Work History {editButton}</button>:null}
           </div>
        )
    }
  }

  export default Work;