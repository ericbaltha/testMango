import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { AddItem } from "./AddItem"

export class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow:false,
            error : null,
            isLoaded : false,
            items : [ ]
        };
    }
    

    componentDidMount() {
        fetch("http://localhost:60573/api/items")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
             console.log(result);
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render() {
        const { error, isLoaded, items, modalShow, setModalShow } = this.state;
        if (error) {
            return <div>Il y a un problème dans la recherche des items</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (items == null) {
            return (
                    <div>
                        <div>Il n'y a aucune image</div>
                        <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>
                            Ajouter un item
                        </Button>
                        <AddItem show={this.state.modalShow} onHide = {() => this.setState({modalShow: false})} />
                    </div>
                   );
        } else {
            return (
                <div>
                    <div className="list-items">
                        {this.state.items.map((item,index) => (
                        
                        <div className={index % 2 ? "item item-left" : "item item-right"} key={item.id}>
                            <div className="item-text-content">
                                <div className="item-title">
                                        {item.title}
                                </div>
                                <div className="item-description">
                                        {item.description}
                                </div>
                            </div>
                            <img src={item.image}/>
                        </div>
                        ))}
                        
                    </div>
                    <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>
                        Ajouter un item
                    </Button>
                    <AddItem show={this.state.modalShow} onHide = {() => this.setState({modalShow: false})} />
                </div>
            );
        }
    }
}
