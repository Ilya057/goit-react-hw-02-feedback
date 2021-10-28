import React from 'react'
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, postitiveFeedback}) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul className={styles.list}>
        <li>Good: { good}</li>
        <li>Neutral: { neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {total > 0 && postitiveFeedback} &#37; </li>
      </ul>
    </>
  )
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  postitiveFeedback: PropTypes.number.isRequired
}
export default Statistics