import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const UPDATE_PRODUCER = gql`
  mutation UpdateProducer($id:ID!,$name:String!, $sex:String!,$dob:String!, $biodata:String!) {
    updateProducer(id:$id,name:$name,sex:$sex, dob:$dob, biodata:$biodata){
        id
        name
        sex
        dob
        biodata
    }
  }
`;

const withUpdateProducer = (Component) => {
    return (props) => {
        const [updateProducer] = useMutation(UPDATE_PRODUCER)
        return (
            <Component
                {...props}
                update={updateProducer}
            />
        )
    }
}

export default withUpdateProducer
