import React from 'react';

import './../../sass/components/activity-list/_provider-count.scss';
  
const SocialCount = (props) => {

  function showBoxForEachProvider() {
    
    // group provider in an object
    let providers = props.providers;
    let map = providers.reduce(function(prev, curr) {
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
        }

        array.push(obj);
      }
    }

    return array;
  }


  const mapProviders = showBoxForEachProvider();
  console.log(mapProviders);

  return (
    <div className='social-count-wrap'>
      { mapProviders.map( provider => {
          return (
            <div key={provider.name} className={`arrow_box socialCount-box ${provider.name}`}> 
              <i className={`fa fa-${provider.name}`} aria-hidden='true'></i> 
              <p>{provider.count}</p> 
            </div>
          )
        })
      }
    </div>
  );
};

SocialCount.propTypes = { };

export default SocialCount;

