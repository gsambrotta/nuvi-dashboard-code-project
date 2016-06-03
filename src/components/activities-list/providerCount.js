import React from 'react';
import $ from 'jquery';

import './../../sass/components/activity-list/_provider-count.scss';
  
const SocialCount = (props) => {

  function showBoxForEachProvider() {
    // group provider in an object
    let providers = props.providers;
    let map = providers.reduce(function (prev, curr) {
      prev[curr] = (prev[curr] || 0) + 1;
      return prev;
    }, {}); 

    // create objects with name and count of each provider
    // push it in a new array
    let array = [];

    for (let key in map) {
      if (map.hasOwnProperty(key)) {
        let obj = { 
          name: key,
          count: map[key]
        };
        array.push(obj);
      }
    }

    return array;
  }
  const mapProviders = showBoxForEachProvider();


  function handleCountClick(e) {
    let target = e.target;
    let targetClass;
    let activityBoxHeader = $('.activity-wrap header');

    // find p tag target
    if (target.nodeName === 'P') {
      targetClass = $(target).attr('class');
    } else {
      target = $(target).find('p');
      targetClass = $(target).attr('class');
    }

    // hide/show related activity box
    if ($(activityBoxHeader).hasClass(targetClass)) {
      let currentBoxClass = ($('.activity-wrap header.' + targetClass));

      if (currentBoxClass.is(':visible')) {
        currentBoxClass.parent().hide();
        $(target).parent().css('opacity', '.6');
      } else {
        currentBoxClass.parent().show();
        $(target).parent().css('opacity', '1');
      }
    }
  }


  return (
    <div className='social-count-wrap'>
      {mapProviders.map(provider => {
        return (
          <div key={provider.name} 
                className={`arrow_box socialCount-box ${provider.name}`} 
                onClick={handleCountClick}> 
            <i className={`fa fa-${provider.name}`} aria-hidden='true'></i> 
            <p className={provider.name}>{provider.count}</p> 
          </div>
        );
      })
      }
    </div>
  );
};

SocialCount.propTypes = { };

export default SocialCount;

