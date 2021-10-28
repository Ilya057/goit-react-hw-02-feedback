import React from 'react'
import PropTypes from 'prop-types'
import styles from './Feedback.module.css'


const Feedback = ({ options, onCount }) => {
  const {good, neutral, bad} = options
  return (
    <>
      <button className={styles.button}type = 'button' name ='good'  onClick={onCount}>Good</button>
      <button className={styles.button}type='button' name ='neutral' onClick={onCount}>Neutral</button>
      <button className={styles.button} type='button'  name='bad'onClick={onCount}>Negative</button>
    </>
  )
}



export default Feedback

