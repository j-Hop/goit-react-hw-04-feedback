import React, { Component } from 'react';
import { FeedbackOption } from './FeedbackOption/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackStatsCounter = options => {
    this.setState(prevState => {
      return {
        [options]: prevState[options] + 1,
      };
    });
  };

  totalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  positiveFeedbackPercentage() {
    const {good} = this.state;
    const positiveFeedbackPercentage = Number(((good/this.totalFeedback())*100).toFixed(1));
    return positiveFeedbackPercentage > 0 ? positiveFeedbackPercentage : 0;
  }
render() {
  const {good, neutral, bad} = this.state;
  return(
<>
<Section title="Please leave your feedback">
          <FeedbackOption
            options={Object.keys(this.state)}
            onLeavFeedback={this.feedbackStatsCounter}
          />
        </Section>
        <Section title="Statistic">
          {this.totalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positiveFeedback={this.positiveFeedbackPercentage()}
            />
          )}
        </Section>
</>
  );
}
}