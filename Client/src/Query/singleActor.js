import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import moment from "moment";

const GET_ONE_ACTOR = gql`
  query SingleActor($id: ID!) {
    singleActor(id:$id){
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

const withActor = (Component) => {
    return (props) => {
        const { loading, error, data } = useQuery(GET_ONE_ACTOR, {
            variables: { id: Number(props.data_id) },
          })
        return (
            <Component
                {...props}
                Data={data.singleActor ? data.singleActor : {
                  id: 0,
                  name: "",
                  sex: "Male",
                  biodata: "",
                  dob: moment(new Date()).format("MM/DD/YYYY"),
                  movie:[]
                }}
                Loading={loading}
                Error={error}
            />
        )
    }
}

export default withActor
