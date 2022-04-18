import React, { Component } from "react";
import '../style/Page.css'
import Header from "../components/Header"
import Skills from "../components/Skills"
import About from "../components/About"
import image from '../img/background.jpg'

class Page extends Component {
    constructor(props){
      super(props);

    }
  
    render (){ 

        
      return ( 
        
        <div className="Page">
            <Header />
            <div id="pageBody">
              <Skills />
              <About />
            </div>
            
        </div>
        
            
        )
    }
  }

  export default Page;