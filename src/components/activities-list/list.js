import React from 'react';
import './../../sass/components/activity-list/_activities-list.scss';

import Avatar from './../common/avatar.js';
  
const List = (props) => {

  return (
    <div className='activity-wrap'>
      <header className={props.provider}> <i className={`fa fa-${props.provider}`} aria-hidden='true'></i> </header>
      <div className='activity-box_message'>
        <Avatar image={props.avatar}/>
        <h3>
          <a href={props.actorUrl} target='_blank'> {props.username} </a> 
          <span className='date'> {props.date} </span>
        </h3>
        <p> {props.msg} </p>
      </div>
      <footer>
        <div className='footer-icons'>
          <a href={props.actorUrl} target='_blank'>
           <i className='fa fa-thumbs-up' aria-hidden='true'></i>
          </a>
          <a href={props.msgUrl} target='_blank'>
           <i className='fa fa-reply' aria-hidden='true'></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

List.propTypes = { 
  provider: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired,
  actorUrl: React.PropTypes.string.isRequired,
  msgUrl: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  msg: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired

};
  
export default List;

