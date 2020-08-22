import React, { Component } from 'react';
import './../App.css';
import {Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import moment from 'moment';

class UsernameResultsRow extends Component {
    state = {}
  
    render() {
        const UsernameResults = {
            textAlign: "center",
            fontSize: 20,
          };

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
            {(this.props.repo.data[0].commit.author.date !== null ) && (<Table.Cell style={UsernameResults}>{moment(this.props.repo.data[0].commit.author.date).format("MM-DD-YYYY")}</Table.Cell>)}
            
        </Table.Row>
                    
          
      )
    }
  }
  
  export default UsernameResultsRow;
  


