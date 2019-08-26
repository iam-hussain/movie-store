import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const DELETE_RELATION = gql`
  mutation DeleteActorMovie($actor_id: ID!, $movie_id: ID!) {
    deleteActorMovie(actor_id: $actor_id, movie_id: $movie_id){
        status
    }
  }
`;

const withDeleteActorMovie = (Component) => {
    return (props) => {
        const [deleteActorMovie] = useMutation(DELETE_RELATION)
        return (
            <Component
                {...props}
                deleteRelation={deleteActorMovie}
            />
        )
    }
}

export default withDeleteActorMovie
