import React, { Component } from "react";
import '../style/Page.css'
import Header from "../components/Header"
import image from '../img/background.jpg'

class Page extends Component {
    constructor(props){
      super(props);

    }
  
    render (){ 

        
      return ( 
        
        <div className="Page">
            <Header />
        </div>
        
            
        )
    }
  }

  export default Page;