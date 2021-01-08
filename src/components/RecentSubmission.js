import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  if (!props.isSubmitted) {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.submission }</p>
    </div>
  );
  } else {
    return (
      null
    )
  }
}

RecentSubmission.propTypes = {
  submission: PropTypes.string.isRequired,
  isSubmitted: PropTypes.bool.isRequired
};

export default RecentSubmission;
