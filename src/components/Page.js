import React, { Component } from "react";
import '../style/Page.css'
import Header from "../components/Header"
import Skills from "../components/Skills"
import About from "../components/About"
import Education from "../components/Education"
import Work from "../components/Work"
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
              <div id="bio">
                <About />
              <Education />
              <Work />
              </div>
              
            </div>
            
        </div>
        
            
        )
    }
  }

  export default Page;