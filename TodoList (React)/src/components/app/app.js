import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItemForm from '../add-item-form/add-item-form';

import './app.css';

export default class App extends React.Component {

  maxId = 100;
  createTodoItem = (label) => {
    return{
      label,
      done: false,
      important: false,
      id: this.maxId++
    }
  };

  //_______S__T__A__T__E_____________________________________________________________________
  //_________________________________________________________________________________________
  //_________________________________________________________________________________________
  
  constructor(){
    super();
    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have A Lunch')
      ],
      term: '',
      filter: 'all'
    };

   

    this.addItem = (text) => {
      const newItem = this.createTodoItem(text);
      this.setState(({ todoData }) => {
        
        const newArray = todoData;
        newArray.push(newItem);

        return{
          todoData: newArray
        };
      });
    };
  };

  deleteItem = (id) => {
    this.setState(({  todoData  }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];

    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx), 
      newItem, 
      ...arr.slice(idx + 1)
    ];
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };


    });

    
  };

  onSearchChange = (term) => {
    this.setState({term});
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  };

  search(items, term) {
    if (term.length === 0){
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;

    });

    
  }

  filter(items, filter){
    switch(filter){
      case 'all': 
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    };
  }

  render(){
    
    const {todoData, term, filter} = this.state;

    const VisibleItems = this.filter(
      this.search(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
          onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter 
          filter={filter}
          onFilterChange={this.onFilterChange} />
        </div>

        <TodoList 
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
        todos={VisibleItems} />
        <AddItemForm 
        onAdd = {this.addItem}/>
      </div>

    );
  };
};

