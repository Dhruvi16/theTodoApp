import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

import {ADD_TODO, TODO} from './queries'

const Modal = ({ children, closeModal, modalState, title }) => {
  if(!modalState) {
    return null;
  }
  
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  title: PropTypes.string
}

class AddTodo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalState: false,
      todo: '',
      location: '',
      time: '',
      date:'',
      canvas: '',
      done: false
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    });
  }
  handleSubmit = (addTodo) => {
    // call function to add a todo
    if (this.state.todo) {
      addTodo({
        variables: {
          todo: this.state.todo,
          location: this.state.location,
          time: this.state.time,
          date: this.state.date,
          canvas: this.state.canvas,
        },
        refetchQueries: [{
          query: TODO
        }]
      })
      this.setState({
        todo: "",
        location: "",
        time: "",
        date: "",
        canvas: ""
      });
    }
  }
  
  render() {
    return(
      <section className="section">
        <div className="container">
          <div className="has-text-centered content">
            <a className="button is-primary" onClick={this.toggleModal}>
              Add Task
            </a>
          </div>
          
          <Modal 
            closeModal={this.toggleModal} 
            modalState={this.state.modalState} 
            title="Add a task to do"
          >
                 <Mutation mutation={ADD_TODO}>
      {(addTodo, { data }) => (
      <div>
        <div class="modal">
          <div class="modal-background"></div>
          <div class="modal-content">
          <form onSubmit={e => {
                            e.preventDefault();
                            this.handleSubmit(addTodo);
                        }}
        >
          <container>
          <div class="field">
            <label class="label">Add a Task</label>
            <div class="control">
              <input class="input" type="text" onChange={(e)=>this.setState({todo: e.target.value})} value={this.state.todo}></input>
            </div>
          </div>
          <div class="field">
            <label class="label">Add a Location of Task</label>
            <div class="control">
              <input class="input" type="text" onChange={(e)=>this.setState({location: e.target.value})} value={this.state.location}></input>
            </div>
          </div>
          <div class="field">
            <label class="label">Add date for task</label>
            <div class="control">
              <input class="input" type="date" onChange={(e)=>this.setState({date: e.target.value})} value={this.state.date}></input>
            </div>
          </div>
          <div class="field">
            <label class="label">Add time for task</label>
            <div class="control">
              <input class="input" type="time" onChange={(e)=>this.setState({time: e.target.value})} value={this.state.time}></input>
            </div>
          </div>
          <div class="field">
            <label class="label">Add Canvas Element</label>
            <div class="control">
              <input class="input" type="text" onChange={(e)=>this.setState({canvas: e.target.value})} value={this.state.canvas}></input>
            </div>
          </div>
          <input class="button is-danger" type="submit"/>
          </container>
        </form>

          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
        <form onSubmit={e => {
                            e.preventDefault();
                            this.handleSubmit(addTodo);
                        }}
        >
          <container>
          <div class="field">
            <label class="label">Add a Task</label>
            <div class="control">
              <input class="input" type="text" onChange={(e)=>this.setState({todo: e.target.value})} value={this.state.todo}></input>
            </div>
          </div>
          <div class="field">
            <label class="label">Add a Location of Task</label>
            <div class="control">
              <input class="input" type="text" onChange={(e)=>this.setState({location: e.target.value})} value={this.state.location}></input>
            </div>
          </div>
          <div class="field">
            <label class="label">Add date for task</label>
            <div class="control">
              <input class="input" type="date" onChange={(e)=>this.setState({date: e.target.value})} value={this.state.date}></input>
            </div>
          </div>
          <div class="field">
            <label class="label">Add time for task</label>
            <div class="control">
              <input class="input" type="time" onChange={(e)=>this.setState({time: e.target.value})} value={this.state.time}></input>
            </div>
          </div>
          <div class="field">
            <label class="label">Add Canvas Element</label>
            <div class="control">
              <input class="input" type="text" onChange={(e)=>this.setState({canvas: e.target.value})} value={this.state.canvas}></input>
            </div>
          </div>
          <input class="button is-danger" type="submit"/>
          </container>
        </form>
      </div>
       )}
       </Mutation>

          </Modal>
        </div>
      </section>
    );
  }
}



export default AddTodo
