import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <>
      <h2 className={css.message}>{message}</h2>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};