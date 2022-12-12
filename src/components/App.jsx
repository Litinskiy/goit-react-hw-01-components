import user from "../components/profile/user.json";
import data from "../components/statistics/data.json"
import friends from "../components/friends/friends.json"
import transactions from "../components/transactions/transactions.json"

import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friends/friendList"
import {  TransactionHistory } from "./transactions/TransactionHistory";


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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
