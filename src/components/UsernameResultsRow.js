


import React, { Component } from 'react';
import './../App.css';
import {Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



class UsernameResultsRow extends Component {
    state = {}
  
    render() {
        const UsernameResults = {
            textAlign: "center",
            fontSize: 20,
          };

          let date = this.props.repo.data[0].commit.author.date
          if (date !== null ) {
            
          }
      return (

        <Table.Row>
          {/* replaces null values with N/A */}
            {(this.props.title === null ) && (<Table.Cell style={UsernameResults}>N/A</Table.Cell>)}
            {(this.props.title !== null ) && (<Table.Cell style={UsernameResults}>{this.props.title}</Table.Cell>)}
            
          {/* replaces null values with N/A */}
            {(this.props.repo.data.length === null ) && (<Table.Cell style={UsernameResults}>N/A</Table.Cell>)}
            {(this.props.repo.data.length !== null ) && (<Table.Cell style={UsernameResults}>{this.props.repo.data.length}</Table.Cell>)}
            
          {/* replaces null values with N/A */}
            {(this.props.repo.data[0].commit.author.date === null ) && (<Table.Cell style={UsernameResults}>N/A</Table.Cell>)}
            {(this.props.repo.data[0].commit.author.date !== null ) && (<Table.Cell style={UsernameResults}>{this.props.repo.data[0].commit.author.date}</Table.Cell>)}
            
        </Table.Row>
                    
          
      )
    }
  }
  
  export default UsernameResultsRow;
  


