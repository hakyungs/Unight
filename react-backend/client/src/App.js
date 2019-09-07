import React, { Component } from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import NavBar from './components/NavBar'
import Button from '@material-ui/core/Button';

class App extends Component {

  state = {users: []}

 componentDidMount() { //example of fetching json data
   fetch('/users')
     .then(res => res.json())
     .then(users => this.setState({ users }));
 }

 constructor(props){  //example of showing state when uploading image
     super(props);
     this.state = {
       files: []
     };
   }
   handleChange(files){
     this.setState({
       files: files
     });
   }


  render() {
    return (
      <div classname="App"> //wrapper for material ui
        <NavBar /> //blue navibar
        <DropzoneArea  //zone where you upload
        onChange={this.handleChange.bind(this)}
        />
      </div>

    )
  }

}


export default App
