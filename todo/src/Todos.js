import React from 'react';
import { Query } from 'react-apollo';
import Del from './components/DeleteTodo'
import { Alert } from 'reactstrap';
import Mark from './components/MarkDone'
import {TODO} from './components/queries'


const Todos = () => {

    // <p className="center">You have no todo's left, yay!</p>
  
  return (
    <div className="collection-item" >
    <Query query={TODO}>
    
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return (console.log(error));
      if (data.todo.length){
    return data.todo.map(({ id, todo, location, time, date, done}) => (
      
      
      <Alert key={id} color={done ? "success":"warning"}>
      <span  key={todo.id} > '{todo}'--- Location: {location} --- Time: {time} {date}  <Del id={id} /> <Mark id={id} /> </span>
      </Alert>

      
    ));
    
  
  }
      else{
        return(<div> </div>
          )
         }
      
    }}
    
  </Query>
   </div>
)
}

export default Todos;