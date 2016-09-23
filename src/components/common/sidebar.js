import React from 'react';
import {Link} from 'react-router';

const Sidebar = (props) => {

  return (

    <sidebar>
      <ul className='font-titles'>
        <li><Link to={{ pathname: '/#' }}> Overwiev </Link></li>
        <li><Link to={{ pathname: '/#' }}> Analysis </Link></li>
        <li className='active' ><Link to={{ pathname: '/monitory-board' }}> Monitoring </Link></li>
        <li><Link to={{ pathname: '/#' }}> Maps </Link></li>
        <li><Link to={{ pathname: '/#' }}> Notes </Link></li>
      </ul>
    </sidebar>

  );
};

Sidebar.propTypes = { };

export default Sidebar;

