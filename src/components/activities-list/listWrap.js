import React from 'react';

import List from './list.js';
import ProviderCount from './providerCount.js';
  
const ListWrap = (props) => {

  const activitiesArray = props.activities;
  const activitiesList = activitiesArray.map(activity => {
    return (
      <List 
        key={activity.id} 
        id={activity.id} 
        username={activity.actor_username}
        avatar={activity.actor_avator} 
        actorUrl={activity.actor_url} 
        avatar={activity.actor_avator} 
        msg={activity.activity_message}
        date={activity.activity_date}
        msgUrl={activity.activity_url}
        provider={activity.provider}
      />
    );
  });

  function createProvidersArray() {
    let providers = [];
    let length = activitiesArray.length;
    for (let i = 0; i <= length; i++) {
      let item = activitiesArray[i];
      
      if (item) {
        providers.push(item.provider);
      }
    }
    return providers;
  }
  const providers = createProvidersArray();

  return (
    <div>
      <div className='list-activity'>
        {activitiesList}
      </div>
      <ProviderCount providers={providers} />
    </div>
  );
};

ListWrap.propTypes = { 
  activities: React.PropTypes.array.isRequired
};

export default ListWrap;

