// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import fire from './config/Fire';
// import { Grid, InputLabel } from "material-ui";
// import {
//   ProfileCard,DialogActions,
//   RegularCard,DialogContent,
//   Button,Dialog,DialogTitle,
//   CustomInput,DialogContentText,
//   ItemGrid
// } from "compoments-ui";
// import "assets/css/login.css";

// import avatar from "assets/img/faces/marc.jpg";
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.login = this.login.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.signup = this.signup.bind(this);
//     this.state = {
//       email: '',
//       password: ''
//     };
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   login(e) {
//     e.preventDefault();
//     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//     }).catch((error) => {
//         console.log(error);
//       });
//   }

//   signup(e){
//     e.preventDefault();
//     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//     }).then((u)=>{console.log(u)})
//     .catch((error) => {
//         console.log(error);
//       })
//   }
//   render() {
   
//     return (
//       <div className="login-grid" >
//       <Grid container>
//       <ItemGrid xs={12} sm={12} md={4}></ItemGrid>
//         <ItemGrid xs={12} sm={12} md={4}>
//           <ProfileCard
//             avatar={avatar}
//             subtitle="Login"
//             title="Alec Thompson"
//             content={
//               <ItemGrid xs={12} sm={12} md={12} className="Login-fcont">
//                     <CustomInput
//                       labelText="Username"
//                       value={this.state.email} 
//                       name="email" 
//                       onChange={this.handleChange}
//                       id="username"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
                  
                  
//                     <CustomInput
//                       labelText="Password"
//                       id="pwd"
//                       value={this.state.password} 
//                       onChange={this.handleChange}
//                       type="password"
//                       name="password"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
//                   </ItemGrid>
//             }

//             footer={
             
//               <Button color="primary" round onClick={this.login}>
//                 Login
//               </Button>
//             }
//           />
           
                  
//         </ItemGrid>
//         <ItemGrid xs={12} sm={12} md={4}></ItemGrid>
//         </Grid>
//       </div>
//     );
//   }
// }
// export default Login;
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import React from "react";
// material-ui components-ui
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// core components-ui
// import Header from "components-ui/Header/Header.jsx";
// import HeaderLinks from "components-ui/Header/HeaderLinks.jsx";
// import Footer from "components-ui/Footer/Footer.jsx";
import InfoOutline from "@material-ui/icons/InfoOutline";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import notificationsStyles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx";


import GridContainer from "components-ui/Grid/GridContainer.jsx";
import GridItem from "components-ui/Grid/GridItem.jsx";
import Button from "components-ui/CustomButtons/Button.jsx";
import IconButton from "components-ui/CustomButtons/IconButton.jsx";
import Card from "components-ui/Card/Card.jsx";
import CardBody from "components-ui/Card/CardBody.jsx";
import CardHeader from "components-ui/Card/CardHeader.jsx";
import CardFooter from "components-ui/Card/CardFooter.jsx";
import CustomInput from "components-ui/CustomInput/CustomInput.jsx";
import ReactLoading from 'react-loading';
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import "assets/css/login.css";
import image from "assets/img/profile_city.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.CloseAlert = this.CloseAlert.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      cardAnimaton: "cardHidden",
      spiner: false,
      btntext:'LOGIN',
      sms:'',
      formtype:'submit',
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  CloseAlert() {
  this.setState({sms:''});
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
 
  	this.setState({ spiner: true,btntext:'LOGGING' });
  	if (this.state.email=='' || this.state.password=='') {
  		this.setState({smsStatus:true,sms:'Username and Password Required',btntext:'LOGIN',spiner:false});
  	}else{
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
   this.setState({btntext:'LOGIN',sms:''});
    }).catch((error) => {
    	this.setState({smsStatus:true,sms:'Invalid User Accound !',btntext:'LOGIN',spiner:false});
        console.log(error);
      });
}
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
       
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>

              

                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.login} action="javascript:void(0);" method="GET">
                  <div className="sms-container">
                  {this.state.sms !="" ? <SnackbarContent
                  message={this.state.sms}
                  close
                  Click = {this.CloseAlert} 
                  color="danger"
                  icon={InfoOutline}
                /> :null}
				     </div>
                    <CardHeader color="primary" className={classes.cardHeader+' CardH'}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <IconButton
                          href="#pablo"
                          
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-twitter"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-facebook"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={
                              classes.socialIcons + " fab fa-google-plus-g"
                            }
                          />
                        </IconButton>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
        
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        value={this.state.email}
	                    onChange={this.handleChange}
	                    name = "email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                         
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        value={this.state.password}
		                onChange={this.handleChange}
		                name = "password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button color="primary" size="md" type={this.state.formtype}>
                      { this.state.spiner ? <ReactLoading type="spin" color="#1a8cff" height={20} width={20} /> : null } &nbsp;&nbsp;{this.state.btntext}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
