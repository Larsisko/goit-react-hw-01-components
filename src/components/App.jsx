import React from 'react';
import Profile from './Profile.js/Profile';
import user from 'user.json';
import Statistic from './Statistic.js/Statistic';
import data from 'data.json';
import friends from 'friends.json';
import FriendList from './FrendListJS/FrendList';
import transactions from 'transactions.json';
import TransactionHistory from './transactionHistory/transactionHistory';

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
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
