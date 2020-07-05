import React from 'react';
import { connect } from 'react-redux';

const Contact = ({ loading }) => {
  return (
    <div className="home">
      <h1>Contact</h1>
      {loading ? 'loading' : 'not loading'}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.contact.loading
  };
};

export default connect(mapStateToProps, null)(Contact);
