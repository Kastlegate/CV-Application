import React, { Component } from "react";
import '../style/Info.css'

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
    }




    onClickBtn() {
      console.log('Button has been clicked!');
      this.setState({
        infoEditToggle: this.state.infoEditToggle = true
      })
    }

    
    
    render (){  
      const {

        infoEditToggle
          
      } = this.state;
      // an icon for the edit button  
      const editButton = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
      
      return ( 
 
        )
    }
  }

  export default InfoForm;