import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const UPDATE_MOVIE = gql`
  mutation UpdateMovie($id: ID!, $name:String!, $year_of_release:String!, $plot:String!, $poster:String!, $producer_id: ID!) {
      updateMovie(id:$id, name:$name,year_of_release:$year_of_release,plot:$plot, poster:$poster, producer_id:$producer_id){
        id
        name
        year_of_release
        plot
        poster
        producer{
            id
            name
        }
    }
  }
`;

const withUpdateMovie = (Component) => {
    return (props) => {
        const [updateMovie] = useMutation(UPDATE_MOVIE)
        return (
            <Component
                {...props}
                updateMovie={updateMovie}
            />
        )
    }
}

export default withUpdateMovie
