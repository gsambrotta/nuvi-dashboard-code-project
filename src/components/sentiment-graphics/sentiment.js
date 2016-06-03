import React from 'react';
import PieChart from 'react-simple-pie-chart';

import './../../sass/components/_piechart-wrap.scss';
  
const Sentiment = (props) => {

  return (
    <section>
    <h2> What people say around in the web about NUVI ? </h2>

    <div className='piechart-wrap'>
      <h4 className='positive'>
        <span> {props.positive}% </span> say: We love NUVI! 
      </h4>
      <PieChart
        slices={[
          {
            color: '#446CB3',
            value: props.positive
          },
          {
            color: '#FF7740',
            value: props.negative
          },
          {
            color: '#2C3E50',
            value: props.neutral
          }
        ]}
      />
      <h4 className='negative'>
        <span> {props.negative}% </span> say: You could do much much better, NUVI! 
      </h4>
      <h4 className='neutral'>
        <span>{props.neutral}% </span> say: We don't really care about what's going on here. 
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

