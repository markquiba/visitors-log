import gql from 'graphql-tag';

export const GET_VISITORS = gql`
  {
    visitors {
      device
      ip_address
      date_time
    }
  }
`;