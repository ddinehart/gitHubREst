

import React, { Component } from 'react';
import './../App.css';
import RequestForm from './RequestForm';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'
import OrganizationResults from './OrganizationResults';


class Home extends Component {
    state = {
        users: [],
        requestFormInput: ""
}

// API Calls for Getting Organization Members

    // takes input and calls api to get public members
    getUserFromOrg = () => {
        console.log()
        const organization = this.state.requestFormInput
        // checks to make sure that request input isn't empty
        if (organization !== "" || null) {
            axios
            .get("https://api.github.com/orgs/"+organization+"/public_members").then(response => {
                console.log("users result", response)
                    response.data.forEach(username => {
                        let userURL = username.url.toString()
                        // calls get repos function to get members information
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

// END of API calls for Organization

    // sets the request input value
    setRequestInput = (data) => {
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

      return (
        <div style={home}>
            <h1 style={home}>Git Hub Requests</h1>
            <RequestForm 
                title={"Search a GitHub organization by name and get back a list of all public members"} 
                placeholder={"organization"} 
                getUserFromOrg={this.getUserFromOrg}
                setRequestInput={this.setRequestInput}
                />
            <br></br>
            <OrganizationResults users={this.state.users}></OrganizationResults>
        </div>
      )
    }
  }
  
  export default Home;
  


