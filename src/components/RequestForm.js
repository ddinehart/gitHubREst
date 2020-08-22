

import React, { Component } from 'react';
import './../App.css';
import {Form, Button } from 'semantic-ui-react';
// import Survey from './Survey';

// import hotel from './../assets/hotel.png'


class RequestForm extends Component {
    state = {}
  

    handleRequestFormChange = (e, data) => {
        this.props.setRequestInput(data)
    }

    render() {
        // const inputStyle = {
        //     textAlign: "center",
        //     color: "#024873",
        //     padding: "20px",
        //     margin: "10px",
        //     fontFamily: "Arial",
        //     fontSize: 20,
        //     width: '30%',
        //     height: '10%',
        //     borderRadius: '25px'
        //   };
        // const buttonStyle = {
        //     textAlign: "center",
        //     backgroundColor: "#021859",
        //     color: "white",
        //     padding: "20px",
        //     margin: "10px",
        //     fontFamily: "Arial",
        //     fontSize: 20,
        //     borderRadius: '25px'
        //   };
          const mystyle = {
            alignContent: "center",
            width: "100%",
            marginTop: "20px",
            color: "white",
            padding: "20px",
            backgroundColor: "#021859",
            borderRadius: "5px",
            fontFamily: "Arial"
          };
          const labelStyle = {
            alignContent: "center",
            color: "white",
            fontSize: "20px",
            padding: "5px"
          };
          
      return (
        <div style={mystyle}>
            <Form>
                <Form.Field>
                <label style={labelStyle}>{this.props.title} </label>
                <Form.Input 
                    color="white"
                    placeholder={this.props.placeholder} 
                    autoComplete="off"
                    id="requestFormInput"
                    onChange={this.handleRequestFormChange}
                    value={this.props.requestFormInput}
                    onKeyPress={e => {if (e.key === "Enter")e.preventDefault();}}

                />
                </Form.Field>
                    <Button 
                        inverted
                        color="green"
                        onClick={this.props.getUserFromOrg}
                    >
                    Submit
                    </Button>
            </Form>
            {/* <input style={inputStyle}></input>
            <button onClick={this.props.userCall} style={buttonStyle}>
                {this.props.title}
            </button> */}
         </div>
      )
    }
  }
  
  export default RequestForm;
  


