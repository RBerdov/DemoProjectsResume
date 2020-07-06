import React, { Component } from 'react';

import './add-item-form.css';

export default class AddItemForm extends Component{
    constructor(){
        super();
        this.state = {
            label: ''
        };
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label:''
        });
    };
    render(){
        
        return(
            <form className="item-to-add d-flex" onSubmit={this.onSubmit}>
                <input type = "text" 
                className="form-control item-to-add__input"  
                placeholder = "enter a new todo"
                onChange={this.onLabelChange}
                value={this.state.label}/>
                <button 
                    className="btn btn-outline-primary add-button" 
                    id = "add">
                        Add new item
                </button>
            </form>
        );
    };
};