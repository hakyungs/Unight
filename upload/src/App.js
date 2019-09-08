import React, { Component } from 'react';
import ReactS3 from 'react-s3';
import { Config }  from './config.js'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar'


export default class DropzoneDialogExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }
 
    handleClose() {
        this.setState({
            open: false
        });
    }
 
    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files, 
            open: false,
        });
        console.log(files[0]);
        console.log(Config)
        ReactS3.uploadFile(files[0], Config)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err);
        })
    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
    }
 
    render() {
        return (
            <div>
                <NavBar />
                <br />
                <br />
                <Button variant="contained" size="medium" color="primary" onClick={this.handleOpen.bind(this)}>
                  Unight!
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}
