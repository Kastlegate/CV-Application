import React, { Component } from "react";
import '../style/Info.css'


class Info extends Component {
    constructor(){
      super();
       //creating a state that can be modified
      this.state = {
            //creating values inside state
            name: '',
            phone: '',
            email: '',
            location: '',
            website: ''        
        }
    }
  
    render (){  
      const {
        name,
        phone,
        email,
        location,
        website   
      } = this.state;
     

      return ( 
       <div id="Info">
           <h1 id="name" >{name ? name: 'Freyja'}</h1>
           <div id="phone" className='infoItem'>Phone: {phone ? phone: '555-555-5555'}</div>
           <div id="email" className='infoItem'>Email: {email ? email: 'Freyja@fakePuppyEmail.com'}</div>
           <div id="location" className='infoItem'>Location: {location ? location: 'Kennel, Kentucky'}</div>
           <div id="website" className='infoItem'>Website: {website ? website: 'puppiesCannot make websites... Dot Com'}</div>
           
       </div>
        )
    }
  }

  export default Info;