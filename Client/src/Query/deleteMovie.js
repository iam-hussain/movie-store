import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id:$id){
        id
    }
  }
`;

const withDeleteMovie = (Component) => {
    return (props) => {
        const [deleteMovie] = useMutation(DELETE_MOVIE)
        return (
            <Component
                {...props}
                deleteMovie={deleteMovie}
            />
        )
    }
}

export default withDeleteMovie
