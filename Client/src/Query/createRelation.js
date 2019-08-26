import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CREATE_RELATION = gql`
  mutation CreateActorMovie($actor_id: ID!, $movie_id: ID!) {
    createActorMovie(actor_id: $actor_id, movie_id: $movie_id){
        status
    }
  }
`;

const withCreateActorMovie = (Component) => {
    return (props) => {
        const [createActorMovie] = useMutation(CREATE_RELATION)
        return (
            <Component
                {...props}
                createRelation={createActorMovie}
            />
        )
    }
}

export default withCreateActorMovie
