import React from 'react';
import Profile from './Profile.js/Profile';
import user from 'user.json';
import Statistic from './Statistic.js/Statistic';
import data from 'data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
    </div>
  );
};
