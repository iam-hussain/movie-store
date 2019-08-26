import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const DELETE_PRODUCER = gql`
  mutation DeleteProducer($id: ID!) {
    deleteProducer(id:$id){
        id
    }
  }
`;

const withDeleteProducer = (Component) => {
    return (props) => {
        const [deleteProducer] = useMutation(DELETE_PRODUCER)
        return (
            <Component
                {...props}
                delete={deleteProducer}
            />
        )
    }
}

export default withDeleteProducer
