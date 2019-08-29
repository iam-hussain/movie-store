import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_ACTOR = gql`
  {
    allActors {
      id
      name
      sex
      dob
      biodata
      movie{
        id
        name
      }
    }
  }
`;

const withallActors = (Component) => {
    return (props) => {
        const { loading, error, data , refetch} = useQuery(GET_ALL_ACTOR)
        return (
            <Component
                {...props}
                actorData={data.allActors}
                actorLoading={loading}
                actorError={error}
                actorRefetch= {refetch}
                
            />
        )
    }
}

export default withallActors
