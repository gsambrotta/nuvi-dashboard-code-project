/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import $ from 'jquery';

import Sidebar from './components/sidebar.js';
import MonitoryBoard from './components/monitoryBoard.js';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      activties: []
    };
  }

  loadActivities() {
    const self = this;

    $.getJSON(this.props.route.activitiesApi)
    .done(function (data) {
      self.setState({
        activties: data
      });
    })
    .fail(function (jqxhr, textstatus, err) {
      console.log('Request failed: ' + textstatus + ' ' + err);
    });
  }

  componentDidMount() {
    this.loadActivities();

    const reloadActivities = setInterval(() => {
      this.loadActivities();
    }, 20000); 
    
  }
    
  render() {
    return (
      <div>
        <header>
          <h1>Hi NUVI, Welcome back!</h1>
        </header>
        <Sidebar />
        <main>
          {React.cloneElement(this.props.children, {
            activities: this.state.activities
          })
          }
        </main>
      </div>
    ); 
  }
}

App.propTypes = { 
  children: React.PropTypes.object.isRequired
};


ReactDOM.render(

  <Router history={browserHistory}>

    <Route path='/monitory-board' activitiesApi={'https://nuvi-challenge.herokuapp.com/activities'} component={App}>
      <IndexRoute component={MonitoryBoard} />
    </Route>

  </Router>,

  document.getElementById('app')
);
