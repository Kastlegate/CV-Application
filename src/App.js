import React, { Component } from "react";
import Page from "./components/Page"
import './style/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPenToSquare  } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faPenToSquare)
library.add(faTrashCan)

class App extends Component {
  constructor(props){
    super(props);

  }

  render (){
    return ( 
      <Page />
      )
  }
}

export default App;

