


import React, { Component } from 'react';
import './../App.css';
import {Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



class OrganizationResultsRow extends Component {
    state = {}
  
    render() {
        const OrganizationResults = {
            textAlign: "center",
            fontSize: 20,
          };

          console.log("props", this.props)

      return (
        
        <Table.Row>
            {/* replaces null values with N/A */}
            {(this.props.user.login === null ) && (<Table.Cell style={OrganizationResults}>N/A</Table.Cell>)}
            {(this.props.user.login !== null ) && (<Table.Cell style={OrganizationResults}>{this.props.user.login}</Table.Cell>)}

            {/* replaces null values with N/A */}
            {(this.props.user.name === null ) && (<Table.Cell style={OrganizationResults}>N/A</Table.Cell>)}
            {(this.props.user.name !== null ) && (<Table.Cell style={OrganizationResults}>{this.props.user.name}</Table.Cell>)}

            {/* replaces null values with N/A */}
            {(this.props.user.email === null ) && (<Table.Cell style={OrganizationResults}>N/A</Table.Cell>)}
            {(this.props.user.email !== null ) && (<Table.Cell style={OrganizationResults}>{this.props.user.email}</Table.Cell>)}
            
        </Table.Row>
      )
    }
  }
  
  export default OrganizationResultsRow;
  


