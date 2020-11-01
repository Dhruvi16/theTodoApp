import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Login extends Component{

render(){
  return(
    <div>
    <Card className="has-text-centered">
    <Card.Body>
      <h1 class="mb-3"> Its a Todo app "React, Graphql, Hasura and Auth0"</h1>
      <Button class="button is-primary mt-1" onClick={()=>this.props.auth.login()}>Login</Button>
    </Card.Body>  
  </Card>
</div>
  )
}


}


export default Login;