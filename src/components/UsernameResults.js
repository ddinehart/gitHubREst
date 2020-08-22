

import React, { Component } from 'react';
import './../App.css';
import { Grid, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import OrganizationResultsRow from './OrganizationResultsRow';



class OrganizationResults extends Component {
    state = {
       
    }
  
    render() {
        const OrganizationResults = {
            textAlign: "center",
            fontSize: 20,
          };

          console.log("props", this.props)

      return (
        <Grid.Row>
            <Grid.Column>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell style={OrganizationResults}>Repo Title</Table.HeaderCell>
                            <Table.HeaderCell style={OrganizationResults}>Total # of Commits</Table.HeaderCell>
                            <Table.HeaderCell style={OrganizationResults}>Last Date of Commit</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.users.map((user, i) => (
                            <OrganizationResultsRow
                                user={user}
                                key={i}
                            >

                            </OrganizationResultsRow>
                        ))}
                    </Table.Body>
                </Table>
            </Grid.Column>
        </Grid.Row>
      )
    }
  }
  
  export default OrganizationResults;
  


