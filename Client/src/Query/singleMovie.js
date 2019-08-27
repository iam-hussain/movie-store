import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import moment from "moment";

const GET_ONE_MOVIE = gql`
  query SingleMovie($id: ID!) {
    singleMovie(id:$id){
        id
        name
        year_of_release
        plot
        poster
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

const withMovie = (Component) => {
    return (props) => {
        const { loading, error, data } = useQuery(GET_ONE_MOVIE, {
            variables: { id: Number(props.data_id) },
          })
        return (
            <Component
                {...props}
                Data={data.singleMovie ? data.singleMovie : {
                  id: 0,
                  name: "",
                  plot: "",
                  year_of_release: moment(new Date()).format("YYYY"),
                  poster: "",
                  actor:[],
                  producer:0
                }}
                Loading={loading}
                Error={error}
            />
        )
    }
}

export default withMovie
