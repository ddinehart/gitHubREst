

import React, { Component } from 'react';
import './../App.css';
import { Grid, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import UsernameResultsRow from './UsernameResultsRow';



class UsernameResults extends Component {
    state = {}
  
    render() {
        const OrganizationResults = {
            textAlign: "center",
            fontSize: 20,
          };

      return (
        <Grid.Row>
            <Grid.Column>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell style={OrganizationResults}>Repo Title</Table.HeaderCell>
                            <Table.HeaderCell style={OrganizationResults}>Total # of Commits</Table.HeaderCell>
                            <Table.HeaderCell style={OrganizationResults}>Last Date of Commit </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.repos.map((repo, i) => (
                            <UsernameResultsRow
                                repo={repo}
                                key={i}
                                title={this.props.repoTitles[i].name}
                            />
                        ))}
                    </Table.Body>
                </Table>
            </Grid.Column>
        </Grid.Row>
      )
    }
  }
  
  export default UsernameResults;
  


