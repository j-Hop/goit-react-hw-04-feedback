import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positiveFeedback = 0,
  }) => {
    return (
      <div className={css.statisticContainer}>
        <p className={css.statistic}>Good: {good}</p>
        <p className={css.statistic}>Neutral: {neutral}</p>
        <p className={css.statistic}>Bad: {bad}</p>
        <p className={css.statistic}>Total: {total}</p>
        <p className={css.statistic}>Positive feedbacks: {positiveFeedback}%</p>
      </div>
    );
  };
  
  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  };