import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_ALL_PRODUCER = gql`
  {
    allProducers{
        id
        name
        sex
        dob
        biodata
    }
  }
`;

const withallProducers = (Component) => {
    return (props) => {
        const { loading, error, data, refetch } = useQuery(GET_ALL_PRODUCER)

        return (
            <Component
                {...props}
                producersData={data}
                producersLoading={loading}
                producersError={error}
                refetch={refetch}
            />
        )
    }
}

export default withallProducers
