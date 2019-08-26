import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import moment from "moment";

const GET_ONE_PRODUCER = gql`
  query SingleProducer($id: ID!) {
    singleProducer(id:$id){
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

const withProducer = (Component) => {
    return (props) => {
        const { loading, error, data } = useQuery(GET_ONE_PRODUCER, {
            variables: { id: Number(props.data_id) },
          })
          console.log("data.singleProducer", data.singleProducer)
        return (
            <Component
                {...props}
                Data={data.singleProducer ? data.singleProducer : {
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

export default withProducer
