import React from 'react';
import $ from 'jquery';
import './../sass/components/_monitory-board.scss';

import ListWrap from './activities-list/listWrap';
import SentimentWrap from './sentiment-graphics/SentimentWrap';


export default class MonitoryBoard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      showActivities: true,
      showSentiment: false
    };
  }

  handleClickActivities(e) {
    this.setState({
      showActivities: true,
      showSentiment: false
    });
    let target = e.target;
    $('.nav li').removeClass('active');
    $(target).addClass('active');
  }

  handleClickSentiment(e) {
    this.setState({
      showActivities: false,
      showSentiment: true
    });
    let target = e.target;
    $('.nav li').removeClass('active');
    $(target).addClass('active');
  }

  render() {
    let arraySentiment = [];
    this.props.activities.map(activity => { 
      arraySentiment.push(activity.activity_sentiment);
    });

    return (
      <div className='board'>
        <ul className='nav list--inline titles-font'>
          <li className='btn active' onClick={this.handleClickActivities.bind(this)}> Activities </li>
          <li className='btn' onClick={this.handleClickSentiment.bind(this)}> Brand Overview </li>
        </ul>
        <div className='board-activity-wrap'>
        { this.state.showActivities ? <ListWrap activities={this.props.activities}/> : <SentimentWrap sentiments={arraySentiment}/> }
        </div>
      </div>
    );
  }
}

MonitoryBoard.propTypes = { 
  activities: React.PropTypes.array.isRequired
};

