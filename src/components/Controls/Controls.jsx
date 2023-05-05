import PropTypes from 'prop-types';

const Controls = ({ title, onControlClick }) => {
  return (
    <button
      onClick={() => {
        onControlClick(title);
      }}
    >
      {title}
    </button>
  );
};
export default Controls;

Controls.propTypes = {
  title: PropTypes.string.isRequired,
};
