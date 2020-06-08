import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";


export class Login extends Component  {
    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: "",
          loginErrors: ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        const { username, password } = this.state;

        axios
          .post(
            "http://localhost:api/accounts/",
            {
              user: {
                username: username,
                password: password
              }
            },
            { withCredentials: true }
          )
          .then(response => {
            if (response.data.logged_in) {
              this.props.handleSuccessfulAuth(response.data);
            }
          })
          .catch(error => {
            console.log("login error", error);
          });
          event.preventDefault();
      }

    render() {
        return (
            <div className="login">
                <form className="form-login" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Identifiant</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Identifiant" 
                        onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Mot de passe" 
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button className="submit-login" variant="primary" type="submit">
                        Connection
                    </Button>
                </form>
            </div>
        )
    }
}
export default Login