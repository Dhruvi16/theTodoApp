import gql from 'graphql-tag';

export const MARK_DONE=gql`
mutation MarkDone($id: Int!) {
    update_todo(
        where: {id: {_eq: $id}},
        _set: {
          done: true,
          
        }
      ) {
        affected_rows
        returning {
          id
          
        }
      }
  }
`;

export const TODO = gql` 
  query { 
  todo(order_by: {id: asc}){
    id
    todo
    location
    time
    date
    done
  }
}
`
export const ADD_TODO = gql`
mutation AddTodo($todo: String!, $location: String!, $date: String!, $time: String!, $canvas: String!) {
  insert_todo(objects:[{todo:$todo, location:$location, date: $date, time: $time, canvas: $canvas}]){
    returning{
      id
    }
  }
}
`;

export const DEL_TODO=gql`
mutation AddTodo($id: Int!) {
    delete_todo(where:{id:{_eq:$id}}){
        affected_rows
      }
  }
`;
