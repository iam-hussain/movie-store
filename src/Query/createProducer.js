import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CREATE_PRODUCER = gql`
  mutation CreateProducer($name:String!,$sex:String!, $dob:String!, $biodata:String!) {
    createProducer(name:$name,sex:$sex, dob:$dob, biodata:$biodata){
        id
        name
        sex
        dob
        biodata
    }
  }
`;

const withCreateProducer = (Component) => {
    return (props) => {
        const [createProducer] = useMutation(CREATE_PRODUCER)
        return (
            <Component
                {...props}
                create={createProducer}
            />
        )
    }
}

export default withCreateProducer
