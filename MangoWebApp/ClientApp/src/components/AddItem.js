import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import axios from "axios";

export class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            image:"",
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
        const { title, description, image } = this.state;

        axios
          .post(
            "http://localhost:60573/api/items",
            {
                title: title,
                description: description,
                image:image
            },
            { withCredentials: false }
          )
          .then(response => {
            if (response.data.logged_in) {
              this.props.handleSuccessfulAuth(response.data);
            }
          })
          .catch(error => {
            console.log("Can't save the item", error);
          });
          
      }

    render() { 
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="add-item">
                    <form className="from-addItem" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Titre" 
                            name="title"
                            onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Description" 
                            name="description"
                            onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Lien de l'image</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Lien de l'image" 
                            name="image"
                            onChange={this.handleChange}
                            />
                        </Form.Group>

                        <div className="button-submit-add">
                            <Button variant="primary" type="submit">
                                Ajouter un item
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            </Modal>
        );
    }
}
