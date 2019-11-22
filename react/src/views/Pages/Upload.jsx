import './CSS/Upload.css';
import React from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// react component plugin for creating beatiful tags on an input
import TagsInput from "react-tagsinput";
// plugin that creates slider
import nouislider from "nouislider";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
import Today from "@material-ui/icons/Today";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import AvTimer from "@material-ui/icons/AvTimer";
// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Button from "components/CustomButtons/Button.jsx";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

//
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";


import {getUID} from '../../components/firebase/firebaseAuth.js'
const util = require('util');

class UploadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadURL: "",
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: "b",
      vrtitle:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedValue: event.target.value });
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  updateVRTitle = e => {
    this.setState(
      {
        vrtitle: e.value
      }
    )
  }

  uploadVRVideo()
  {
      console.log("Upload the video")
      console.log("Upload Video Name is: " + this.state.vrtitle)
  }

  componentDidMount() {
    getUID().then(user => {
      this.setState({uploadURL: util.format('%s/upload?%s', process.env.REACT_APP_EXPRESS_BACKEND, user.uid)})
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className = "main_upload">
        <React.Fragment>
        <CssBaseline />
          <Container fixed>
           
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Card>
                  <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                      <MailOutline />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}>Upload VR Video</h4>
                  </CardHeader>
                  <CardBody>
                    <form>
                      {/* <CustomInput
                        labelText="Enter VR Title "
                        id="video_title"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email"
                        }}
                        value = {this.state.vrtitle}
                        
                        
                      /> */}
                      {/* <div>
                        <input type="text" value={this.state.vrtitle} placeholder="Upload VR Vide" 
                        onChange = {this.updateVRTitle}/>
                      </div> */}
                      <div>
                        <TextField
                          id="standard-basic"
                          className={"VRTitle"}
                          label="Type Your VR Title"
                          margin="normal"
                          onChange = {this.updateVRTitle}
                        />
                      </div>
                      {/* <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          autoComplete: "off"
                        }}
                      /> */}
                     
                      <Button color="rose" onClick = {()=>
                        {
                          document.getElementById('file-upload').click()
                        }}>Upload VR Video
                        <input id="file-upload" name="file" type="file" hidden/>
                      </Button>
                      <Button color="rose" onClick={() => {
                        document.getElementById('submit-vr-video').click()
                      }}>Submit VR Video
                        <input id="submit-vr-video" type="submit" 
                        onClick={this.uploadVRVideo}
                        value="submit" hidden />
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </GridItem>
              {/* <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                      <LibraryBooks />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}>Upload VR Video </h4>
                  </CardHeader>
                  <CardBody>
                    <InputLabel className={classes.label}>Upload VR Video</InputLabel>
                    <br />
                    <FormControl fullWidth>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Type VR Video Title" }}
                      />
                    </FormControl>
                  </CardBody>
                </Card>
              </GridItem> */}

              </GridContainer>
            


            <Typography component="div" style={{ backgroundColor: 'white', height: '40vh', width: '60vh', paddingLeft: '5vh', paddingTop: '3vh' }} id="container">
              {/* <IconButton aria-label="show 4 new mails" color="inherit" id="icon" size="medium">
                  <MailIcon />
              </IconButton> */}
              <Typography variant="h5" component="h3">
                Upload VR Video
              </Typography>
              <form id="uploadbanner" enctype="multipart/form-data" method="post" action={this.state.uploadURL}>
                {/* <label for="file-upload" class="custom-file-upload">Upload</label> */}
                <input id="file-upload" name="file" type="file" />
                <input id="submit" type="submit" value="submit"/>
                {/* <Button onClick={this.handleLogin} color="rose" simple size="lg" block>
                  Upload Video
                </Button> */}
              </form>
            </Typography>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

UploadPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(regularFormsStyle,extendedFormsStyle)(UploadPage)
