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
