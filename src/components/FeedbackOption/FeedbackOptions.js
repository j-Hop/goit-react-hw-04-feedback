import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeavFeedback }) => {
  return (
    <div className={css.btnContainer}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.feedbackBtn}
            name={option}
            type="button"
            onClick={() => onLeavFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeavFeedback: PropTypes.func.isRequired,
};