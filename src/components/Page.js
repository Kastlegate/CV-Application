import React, { Component } from "react";
import '../style/Page.css'
import Header from "../components/Header"
import image from '../img/background.jpg'

class Page extends Component {
    constructor(){
      super();
        this.props = {
            background: image
        }
    }
  
    render (){ 
        
        const {
        background
        } = this.props;
        var backgroundImage = {
            background: 'url(' + background + ')'
        }
        
      return ( 
        
        <div className="Page" style={{backgroundImage: this.props.background}}>
            <Header />
        </div>
        
            
        )
    }
  }

  export default Page;