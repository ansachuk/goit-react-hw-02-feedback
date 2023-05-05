import PropTypes from 'prop-types';
import Controls from 'components/Controls/Controls';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(key => (
        <Controls key={key} title={key} onControlClick={onLeaveFeedback} />
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
