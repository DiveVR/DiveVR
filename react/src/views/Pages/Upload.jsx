import './CSS/Upload.css';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Uploadpage() {
  return (
    <div className = "main_upload">
      <React.Fragment>
      <CssBaseline />
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: 'white', height: '60vh' }} id="container">
            {/* <IconButton aria-label="show 4 new mails" color="inherit" id="icon" size="medium">
                <MailIcon />
            </IconButton> */}
            <a href="https://www.google.com"><img id="upload_img" src={require('../../images/upload.png')} /></a>
            <label id="upload_desc">Select files to upload</label>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}