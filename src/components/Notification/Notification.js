import React from 'react'
import PropTypes from 'prop-types';

const Notification = ({ title }) => {
  return (
    <h3>{ title}</h3>
  )
}
Notification.propTypes = {
  title: PropTypes.string
}
export default Notification