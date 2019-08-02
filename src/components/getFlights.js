import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Flights = () => {
  return <div />;
};
const mapStateToProps = state => {
  return {
    flights: state.flights
  };
};

export default connect(
  mapStateToProps,
  {}
)(GetTrips);
