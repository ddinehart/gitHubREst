

import React, { Component } from 'react';
import './../App.css';
import RequestForm from './RequestForm';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'
import UsernameResults from './UsernameResults';


class GetRepos extends Component {
    state = {
        repos: [],
        repoTitles:[],
        requestFormInput: ""
}

// API Calls for Getting Repos and Commits

    // takes input and calls api to get users repos
    getReposFromUser = () => {
        const username = this.state.requestFormInput
        if (username !== "" || null) {
            axios
            .get("https://api.github.com/users/"+username+"/repos").then(response => {
                this.setState({repoTitles: response.data})
                    response.data.forEach(repo => {
                        // calls get commit function to get users commit info 
                        this.getCommitsFromRepo(repo.url)
                    });
            }).catch(error => {
                console.log(error.response)
                this.setState({repos: []})
            })
        } 
    }

    // gets a users commit information from based on repos
    getCommitsFromRepo = (url) => {
        const username = this.state.requestFormInput
        if (username !== "" || null) {
            axios
            .get(url+"/commits?=author="+username).then(response => {
                const commitsList = this.state.repos
                commitsList.push(response)
                this.setState({repos: commitsList})
            }).catch(error => {
                console.log(error.response)
                this.setState({repos: []})
            })
        } 
    }
// END API calls

    // sets input value
      setRequestInput = (data) => {
          this.setState({ requestFormInput: data.value})
      }
  

    render() {
        const main = {
            textAlign: "center",
            color: "#021859",
            padding: "20px",
            fontFamily: "Arial",
            fontSize: 80,
          };

          console.log(this.state)

      return (
        <div style={main}>
           <h1 style={main}>Git Hub Requests</h1>
            <RequestForm 
                title={"Search a user by their username and get back a list of public repos."} 
                placeholder={"username"} 
                getUserFromOrg={this.getReposFromUser}
                setRequestInput={this.setRequestInput}
            />
            <br></br>
            <UsernameResults repoTitles={this.state.repoTitles} repos={this.state.repos}></UsernameResults>
         </div>
      )
    }
  }
  
  export default GetRepos;
  


