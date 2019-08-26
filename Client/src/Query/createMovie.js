import React from "react";
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CREATE_MOVIE = gql`
  mutation CreateMovie($name:String!, $year_of_release:String!, $plot:String!, $producer_id:ID!, $addactor:[ID]) {
    createMovie(name:$name,year_of_release:$year_of_release,plot:$plot, producer_id:$producer_id, addactor:$addactor){
        id
        name
        year_of_release
        plot
    }
  }
`;

const withCreateMovie = (Component) => {
    return (props) => {
        const [createMovie] = useMutation(CREATE_MOVIE)
        return (
            <Component
                {...props}
                createMovie={createMovie}
            />
        )
    }
}

export default withCreateMovie
