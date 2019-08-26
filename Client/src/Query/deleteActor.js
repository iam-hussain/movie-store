import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const DELETE_ACTOR = gql`
  mutation DeleteActor($id: ID!) {
    deleteActor(id:$id){
        id
    }
  }
`;

const withDeleteActor = (Component) => {
    return (props) => {
        const [deleteActor] = useMutation(DELETE_ACTOR)
        return (
            <Component
                {...props}
                delete={deleteActor}
            />
        )
    }
}

export default withDeleteActor
