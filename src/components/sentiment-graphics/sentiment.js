import React from 'react';
import PieChart from 'react-simple-pie-chart';

import './../../sass/components/_piechart-wrap.scss';

const Sentiment = (props) => {
  const pos = props.positive;
  const neg = props.negative;
  const neut = props.neutral;

  // Find percentage
  const tot = pos + neg + neut;
  const posPerc = Number(((pos / tot) * 100).toFixed());
  const negPerc = Number(((neg / tot) * 100).toFixed());
  const neutPerc = Number(((neut / tot) * 100).toFixed());

  return (
    <section>
    <h2> What people say around in the web about NUVI ? </h2>

    <div className='piechart-wrap'>
      <h4 className='positive'>
        <span> {posPerc}% </span> say: We love NUVI!
      </h4>
      <PieChart
        slices={[
          {
            color: '#446CB3',
            value: posPerc
          },
          {
            color: '#FF7740',
            value: negPerc
          },
          {
            color: '#2C3E50',
            value: neutPerc
          }
        ]}
      />
      <h4 className='negative'>
        <span> {negPerc}% </span> say: You could do much much better, NUVI!
      </h4>
      <h4 className='neutral'>
        <span>{neutPerc}% </span> say: We don't really care about what's going on here.
      </h4>
    </div>
    </section>
  );
};

Sentiment.propTypes = {
  positive: React.PropTypes.number.isRequired,
  negative: React.PropTypes.number.isRequired,
  neutral: React.PropTypes.number.isRequired
};

export default Sentiment;

