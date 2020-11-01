import React from 'react';
import { Mutation } from 'react-apollo';
import Button from 'react-bootstrap/Button'
import {MdCancel} from "react-icons/lib/md"
import {DEL_TODO, TODO} from './queries'



const Del = (id) => {
    // <p className="center">You have no todo's left, yay!</p>
  return (
    <Mutation mutation={DEL_TODO}>
        {(deltodo, { data }) => (
        <span data-toggle="tooltip" title="Delete Todo" className="float-right mt-n2 ml-1" onClick={e=> {deltodo({ variables: id, refetchQueries: [{ query: TODO }] })}}>
          <Button className="button is-danger"><MdCancel/></Button>
         
        </span>
         )}
         </Mutation>
  )
}

export default Del;