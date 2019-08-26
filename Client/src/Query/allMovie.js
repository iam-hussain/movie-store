import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_MOVIE = gql`
  {
    allMovies{
        id
        name
        year_of_release
        plot
        producer{
            id
            name
        }
        actor{
            id
            name
        }
    }
  }
`;

const withallMovies = (Component) => {
    return (props) => {
        const { loading, error, data, refetch } = useQuery(GET_ALL_MOVIE)

        return (
            <Component
                {...props}
                movieData={data}
                movieLoading={loading}
                movieError={error}
                movieRefetch = {refetch}
            />
        )
    }
}

export default withallMovies
