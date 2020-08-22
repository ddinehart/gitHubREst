


import React, { Component } from 'react';
import './../App.css';
import {Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



class OrganizationResultsRow extends Component {
    state = {
       
    }
  
    render() {
        const OrganizationResults = {
            textAlign: "center",
            fontSize: 20,
          };

          console.log("props", this.props)

      return (
        
        <Table.Row>
            <Table.Cell style={OrganizationResults}>public repo title</Table.Cell>
            <Table.Cell style={OrganizationResults}># of commits</Table.Cell>
            <Table.Cell style={OrganizationResults}>Date of commits</Table.Cell>
            {/* {(this.props.repo.email === null ) && (<Table.Cell style={OrganizationResults}>Last Date Committed to</Table.Cell>)}
            {(this.props.repo.email !== null ) && (<Table.Cell style={OrganizationResults}>Last Date of Commit</Table.Cell>)} */}
            
        </Table.Row>
                    
          
      )
    }
  }
  
  export default OrganizationResultsRow;
  


