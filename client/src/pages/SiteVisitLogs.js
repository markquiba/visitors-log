import React, { useState, Fragment } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_VISITORS } from '../queries/queries';
import Pagination from '../components/Pagination';
import VisitorLog from '../components/VisitorLog';

function SiteVisitLogs() {

  const { data, error, loading } = useQuery(GET_VISITORS);
  const [currentPage, setCurrentPage] = useState(1);
  const [visitorsPerPage] = useState(20);

  // Query Status
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.log(error.message);
  }

  // Pagination
  const indexOfLastVisitor = currentPage * visitorsPerPage;
  const indexOfFirstVisitor = indexOfLastVisitor - visitorsPerPage;
  const currentVisitors = data.visitors.slice(indexOfFirstVisitor, indexOfLastVisitor);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <ul>
        {currentVisitors.map((visitor, index) => (
          <VisitorLog key={index} visitor={visitor} />
        ))}
      </ul>
      <Pagination
        itemPerPage={visitorsPerPage}
        totalItem={data.visitors.length}
        paginate={paginate}
      />
    </Fragment>
    
  );
}

export default SiteVisitLogs;
