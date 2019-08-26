import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CREATE_ACTOR = gql`
  mutation CreateActor($name:String!,$sex:String!, $dob:String!, $biodata:String!) {
    createActor(name:$name,sex:$sex, dob:$dob, biodata:$biodata){
        id
        name
        sex
        dob
        biodata
    }
  }
`;

const withCreateActor = (Component) => {
    return (props) => {
        const [createActor] = useMutation(CREATE_ACTOR)
        return (
            <Component
                {...props}
                create={createActor}
            />
        )
    }
}

export default withCreateActor
