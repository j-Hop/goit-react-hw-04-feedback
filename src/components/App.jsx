import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackStatsCounter = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    const totalCountFeedback = totalFeedback();
    const positivePercentage = Number(
      ((good / totalCountFeedback) * 100).toFixed(1)
    );
    return positivePercentage > 0 ? positivePercentage : 0;
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeavFeedback={feedbackStatsCounter}
        />
      </Section>
      <Section title="Statistic">
        {totalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positiveFeedback={positiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;