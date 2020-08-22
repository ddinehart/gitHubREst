

import React, { Component } from 'react';
import './../App.css';
import RequestForm from './RequestForm';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'
import UsernameResults from './UsernameResults';


class GetRepos extends Component {
    state = {
        buttonTitle: "Get Users Search Form Or Click to Switch",
        displayBio: false,
        repos: [],
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

    // getUserFromOrg = () => {
    //     console.log()
    //     const organization = this.state.requestFormInput
    //     if (organization !== "" || null) {
    //         axios
    //         .get("https://api.github.com/orgs/"+organization+"/public_members").then(response => {
    //             console.log("users result", response)
    //                 response.data.forEach(username => {
    //                     let userURL = username.url.toString()
    //                     this.getReposFromUser(userURL)
    //                 });
    //         }).catch(error => {
    //             console.log(error.response)
    //             this.setState({repos: []})
    //         })
    //     } 
    // }
    // const USER = 'TODO: your GitHub user name'
    // const EMAIL = 'TODO: your GitHub email address'
    
    // const github = require('octokat')({ token: 'TODO: your GitHub API token' })
    
    // return github.fromUrl(`https://api.github.com/users/${USER}/events`)
    //   .fetch()
    //   .then(events => {
    //     let lastCommit
    
    //     events.some(event => {
    //       return event.type === 'PushEvent' && event.payload.commits.reverse().some(commit => {
    //         if (commit.author.email === EMAIL) {
    //           lastCommit = {
    //             repo: event.repo.name,
    //             sha: commit.sha,
    //             time: new Date(event.createdAt),
    //             message: commit.message,
    //             url: commit.url
    //           }
    
    //           return true
    //         }
    
    //         return false
    //       })
    //     })
    
    //     return lastCommit
    //   })
    
    getRepoFromUser = () => {
        console.log()
        const username = this.state.requestFormInput
        if (username !== "" || null) {
            axios
            .get("https://api.github.com/users/"+username+"/events").then(response => {
                console.log("users events", response)
                    response.data.forEach(repo => {
                        let userURL = repo.url.toString()
                        this.getReposFromEvents(userURL)
                    });
            }).catch(error => {
                console.log(error.response)
                this.setState({repos: []})
            })
        } 
    }

    // gets a users information from their github profile
    // getReposFromUser = (url) => {
    //     fetch(url).then(res => res.json()).then(
    //         (result) => {
    //             console.log("results", result)
    //             const reposList = this.state.repos
    //             reposList.push(result)
    //             this.setState({repos: reposList})
    //         },
    //         (error) => {
    //             console.log(error)
    //         })
    // }



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
        const main = {
            textAlign: "center",
            color: "#021859",
            padding: "20px",
            fontFamily: "Arial",
            fontSize: 80,
          };

          console.log("state", this.state)

      return (
        <div style={main}>
           <h1 style={main}>Git Hub Requests</h1>
            {/* <Button 
                size="huge"
                fluid
                color="black"
                onClick={this.toggleDisplayBio}
            >
                {this.state.buttonTitle}
            </Button>
            {
            this.state.displayBio ? ( */}
                <RequestForm 
                    title={"Search a user by their user name and return back a list of all public repos"} 
                    placeholder={"username"} 
                    getUserFromOrg={this.getRepoFromUser}
                    setRequestInput={this.setRequestInput}
                ></RequestForm>
                {/* ) : (
            <div>
                <RequestForm 
                    title={"Search a GitHub organization by name and get back a list of all public members"} 
                    placeholder={"organization"} 
                    getUserFromOrg={this.doApiCall}
                    setRequestInput={this.setRequestInput}
                    ></RequestForm>
            </div>
          )
        } */}
        <br></br>
        <UsernameResults users={this.state.repos}></UsernameResults>
         </div>
      )
    }
  }
  
  export default GetRepos;
  


