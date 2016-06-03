import React from 'react';
import Sentiment from './sentiment.js';
  
const SentimentWrap = (props) => {
  let pos = [],
    neg = [],
    neutral = [];

  props.sentiments.forEach(function (x) {
    if (x >= 1) {
      pos.push(x);
    } else if (x < 0) {
      neg.push(x);
    } else if (x === 0) {
      neutral.push(x);
    }
  });

  return (
    <div>
      <Sentiment positive={pos.length} negative={neg.length} neutral={neutral.length} />
    </div>
  );
};

SentimentWrap.propTypes = {
  sentiments: React.PropTypes.array.isRequired
};

export default SentimentWrap;
