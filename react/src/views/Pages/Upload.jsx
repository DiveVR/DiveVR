import './CSS/Upload.css';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {getUID} from '../../components/firebase/firebaseAuth.js'
const util = require('util');

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadURL: ""
    };
  }

  componentDidMount() {
    getUID().then(user => {
      this.setState({uploadURL: util.format('%s/upload?%s', process.env.REACT_APP_EXPRESS_BACKEND, user.uid)})
    })
  }

  render() {
    return (
      <div className = "main_upload">
        <React.Fragment>
        <CssBaseline />
          <Container fixed>
            <Typography component="div" style={{ backgroundColor: 'white', height: '10vh', width: '50vh', paddingLeft: '5vh', paddingTop: '3vh' }} id="container">
              {/* <IconButton aria-label="show 4 new mails" color="inherit" id="icon" size="medium">
                  <MailIcon />
              </IconButton> */}
              <form id="uploadbanner" enctype="multipart/form-data" method="post" action={this.state.uploadURL}>
                {/* <label for="file-upload" class="custom-file-upload">Upload</label> */}
                <input id="file-upload" name="file" type="file" />
                <input id="submit" type="submit" value="submit"/>
              </form>
            </Typography>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

export default UploadPage