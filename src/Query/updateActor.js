import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const UPDATE_ACTOR = gql`
  mutation UpdateActor($id:ID!,$name:String!,$sex:String!, $dob:String!, $biodata:String!) {
    updateActor(id:$id, name:$name,sex:$sex, dob:$dob, biodata:$biodata){
        id
        name
        sex
        dob
        biodata
    }
  }
`;

const withUpdateActor = (Component) => {
    return (props) => {
        const [updateActor] = useMutation(UPDATE_ACTOR)
        return (
            <Component
                {...props}
                update={updateActor}
            />
        )
    }
}

export default withUpdateActor
