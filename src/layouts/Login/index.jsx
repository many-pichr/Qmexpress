import React, { Component } from 'react';
import { Grid, InputLabel } from "material-ui";
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";
import "assets/css/login.css";


import avatar from "assets/img/faces/marc.jpg";
class Login extends React.Component {
  componentDidMount(){
    document.title = "Login"
  }
  constructor(props) {
    super(props);
    this.state = {Login: true,Text:'Login',username:'',pwd:'',status:true,message:'',link:'/login'};

    
  }
 

  render() {
    return (
      <div className="login-grid" >
      <Grid container>
      <ItemGrid xs={12} sm={12} md={4}></ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            subtitle="Login"
            title="Alec Thompson"
            content={
              <ItemGrid xs={12} sm={12} md={12} className="Login-fcont">
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  
                  
                    <CustomInput
                      labelText="Password"
                      id="pwd"
                      type="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
            }

            footer={
             
              <Button color="primary" round>
                Login
              </Button>
            }
          />
           
                  
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}></ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default Login;

