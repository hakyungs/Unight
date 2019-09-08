import React, { Component } from 'react';
import ReactS3 from 'react-s3';
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar'

const config = {
  bucketName: 'unight-uploaded',
  region: 'us-east-2',
  accessKeyId: 'AKIAISB7F6D6IKSPXHVA',
  secretAccessKey: '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'
}

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
        ReactS3.uploadFile(files[0], config)
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
