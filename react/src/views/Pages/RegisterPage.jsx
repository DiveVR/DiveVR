
import React from "react";
import PropTypes from "prop-types";
import {signUp} from "../../components/firebase/firebaseAuth.js";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import TextField from '@material-ui/core/TextField';
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
    this.handleToggle = this.handleToggle.bind(this);
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

  updateFirstName = fn => {
    this.state.firstName = fn.target.value
  }

  updateLastName = ln => {
    this.state.lastName = ln.target.value
  }

  updateEmail = e => {
    this.state.email = e.target.value
  }

  updatePassword = p => {
    this.state.password = p.target.value
  }

  handleSignup = () => {
    signUp(this.state.firstName, this.state.lastName, this.state.email, this.state.password).then(() => {
      // Handle successful signup here
      this.redirectToLogin()
    }).catch(err => {
      // Handle unsuccessful signup here
    })
  }

  redirectToLogin = () => {
    this.props.history.push(`/login-page`)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>DiveVR Registration</h2>
              <CardBody>
                <GridContainer justify="center">
                  {/* <GridItem xs={12} sm={12} md={5}>
                    <InfoArea
                      title="Dive VR registration"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, seagna aliqua. Ut enim ad minim v"
                      icon={Timeline}
                      iconColor="rose"
                    />
                    <InfoArea
                      title="Dive in"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, slore trud exercitatuip ex ea c"
                      icon={Code}
                      iconColor="primary"
                    />
                    <InfoArea
                      title="Policy"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi"
                      icon={Group}
                      iconColor="info"
                    />
                  </GridItem> */}
                  <GridItem xs={12} sm={8} md={5}>
                    <div className={classes.center}>
                      <Button justIcon round color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      {` `}
                      <Button justIcon round color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      {` `}
                      <Button justIcon round color="facebook">
                        <i className="fab fa-facebook-f" />
                      </Button>
                      {` `}
                      <h4 className={classes.socialTitle}>or be classical</h4>
                    </div>
                    <form className={classes.form}>
                      <TextField
                        id="standard-text-input"
                        label="First Name"
                        onChange={this.updateFirstName}
                        className={classes.textField}
                        fullWidth
                        type="text"
                        name="text"
                        autoComplete="text"
                        margin="normal"
                      />

                      <TextField
                        id="standard-text-input"
                        label="Last Name"
                        onChange={this.updateLastName}
                        className={classes.textField}
                        fullWidth
                        type="text"
                        name="text"
                        autoComplete="text"
                        margin="normal"
                      />

                      <TextField
                        id="standard-email-input"
                        label="Email Address"
                        onChange={this.updateEmail}
                        className={classes.textField}
                        fullWidth
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                      />

                    <TextField
                      id="standard-password-input"
                      label="Password"
                      onChange={this.updatePassword}
                      className={classes.textField}
                      fullWidth
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                    />

                      <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.center}>
                        <Button onClick= {this.handleSignup} round color="primary">
                          Get started
                        </Button>
                      </div>
                    </form>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(registerPageStyle)(RegisterPage);
