

import React, { Component } from 'react';
import './../App.css';
import RequestForm from './RequestForm';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'
import OrganizationResults from './OrganizationResults';


class Home extends Component {
    state = {
        buttonTitle: "Get Users Search Form Or Click to Switch",
        displayBio: false,
        users: [],
        requestFormInput: ""
}

    doApiCall = () => {
        if (this.state.buttonTitle === "Get Users Search Form Or Click to Switch") {
            console.log("get user from org ")
            this.getUserFromOrg()
        } else {
            console.log("repos from user")
            this.getReposFromUser()
        }
    }

    getUserFromOrg = () => {
        console.log()
        const organization = this.state.requestFormInput
        if (organization !== "" || null) {
            axios
            .get("https://api.github.com/orgs/"+organization+"/public_members").then(response => {
                console.log("users result", response)
                    response.data.forEach(username => {
                        let userURL = username.url.toString()
                        this.getReposFromUser(userURL)
                    });
            }).catch(error => {
                console.log(error.response)
                this.setState({users: []})
            })
        } 
    }

    // gets a users information from their github profile
    getReposFromUser = (url) => {
        fetch(url).then(res => res.json()).then(
            (result) => {
                console.log("results", result)
                const usersList = this.state.users
                usersList.push(result)
                this.setState({users: usersList})
            },
            (error) => {
                console.log(error)
            })
    }

    toggleDisplayBio = () => {
        this.setState ({ displayBio: !this.state.displayBio})
        if (this.state.displayBio === false) {
            this.setState ({ buttonTitle: "Get Repos Search Form Or Click to Switch"})
        } else {
            this.setState ({ buttonTitle: "Get Users Search Form Or Click to Switch"})
        };
      }


      setRequestInput = (data) => {
        //   console.log("setting input", data.id, data.value)
          this.setState({ requestFormInput: data.value})
      }
  
    render() {
        const home = {
            textAlign: "center",
            color: "#021859",
            padding: "20px",
            fontFamily: "Arial",
            fontSize: 80,
          };

          console.log("state", this.state)

      return (
        <div style={home}>
           <h1 style={home}>Git Hub Requests</h1>

           {/* <h5 style={discription}>Get Users Search Form Or Click to Switch</h5> */}
            {/* <Button 
                size="huge"
                fluid
                color="black"
                onClick={this.toggleDisplayBio}
            >
                {this.state.buttonTitle}
            </Button> */}
            {
            // this.state.displayBio ? (
            //     <RequestForm 
            //         title={"Search a user by their user name and return back a list of all public repos"} 
            //         placeholder={"username"} 
            //         getUserFromOrg={this.doApiCall}
            //         setRequestInput={this.setRequestInput}
            //         ></RequestForm>
            //     ) : (
            <div>
                <RequestForm 
                    title={"Search a GitHub organization by name and get back a list of all public members"} 
                    placeholder={"organization"} 
                    getUserFromOrg={this.doApiCall}
                    setRequestInput={this.setRequestInput}
                    ></RequestForm>
            </div>
        //   )
        }
        <br></br>
        <OrganizationResults users={this.state.users}></OrganizationResults>
         </div>
      )
    }
  }
  
  export default Home;
  


