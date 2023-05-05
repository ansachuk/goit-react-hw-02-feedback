import { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';

export default class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onControlClick = title => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        [title]: prevState[title] + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>

        {Object.keys(this.state).map(key => (
          <Controls
            key={key}
            title={key}
            onControlClick={this.onControlClick}
          />
        ))}

        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </>
    );
  }
}

FeedbackCounter.propTypes = {
  name: PropTypes.string,
};
