import React, { Component } from 'react'
import Feedback from './components/Feedback/Feedback'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'
class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  count = (e) => {
    const { name } = e.target
    console.log(e.target);
  this.setState(prev => ({[name]: prev[name] + 1}))

  }

  // countGood = () => {
  //   const { good } = this.state
  //   this.setState((prev) => {
  //     return {
  //       good: prev.good + 1
  //     }
  // })
  // }
  // countNeutral = () => {
  //   const { neutral } = this.state
  //   this.setState((prev) => {
  //     return {
  //       neutral: prev.neutral + 1
  //     }
  //   })
  // }
  // countNegative = () => {
  //   const { bad } = this.state
  //   this.setState((prev) => {
  //     return {
  //       bad: prev.bad + 1
  //     }
  //   })
  // }
  countTotalFeedback =() => {
    const { good, neutral, bad } = this.state
   return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    return good / this.countTotalFeedback( ) * 100
  }


  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positiveFeedback = Number(this.countPositiveFeedbackPercentage().toFixed(0))
    return (
      <Section title = "Please leave feedback" >

        <Feedback options = {this.state} onCount = {this.count}></Feedback>
        {total > 0 ? (
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} postitiveFeedback = {positiveFeedback} ></Statistics>
) : <Notification title = "No feedback given"></Notification>
}

</Section>
    )
}
}

export default App