import React from 'react';
import $ from 'jquery';
import './../sass/components/_monitory-board.scss';

import ListWrap from './listWrap';
import SentimentWrap from './SentimentWrap';


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
    console.log(target);
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
    return (
      <div className='board'>
        <ul className='nav list--inline titles-font'>
          <li className='btn active' onClick={this.handleClickActivities.bind(this)}> Activities </li>
          <li className='btn' onClick={this.handleClickSentiment.bind(this)}> Brand Overview </li>
        </ul>
        {this.state.showActivities ? <ListWrap /> : <SentimentWrap /> }
      </div>
    );
  }
}

MonitoryBoard.propTypes = { };

