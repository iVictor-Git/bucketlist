import React from 'react';
import './Navigation.css';

import { MdHome, MdPerson, MdList } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default () => {
  // 3 icons, profile, home, bucket
  return (
    <div className="Navigation">
      <NavLink
        to="/profile"
        className="Navigation Text"
        activeStyle={{
          backgroundColor: 'rgba(255,255,255,.5)',
          boxShadow: '1px 1px 10px .25px black inset',
          color: 'black',
        }}>
        {/* <Text text={MdPerson} /> */}
        <MdPerson />
      </NavLink>
      <NavLink
        exact
        to="/"
        className="Navigation Text"
        activeStyle={{
          backgroundColor: 'rgba(255,255,255,.5)',
          boxShadow: '1px 1px 10px .25px black inset',
          color: 'black',
        }}>
        {/* <Text text={MdPerson} /> */}
        <MdHome />
      </NavLink>
      <NavLink
        to="/list"
        className="Navigation Text"
        activeStyle={{
          backgroundColor: 'rgba(255,255,255,.5)',
          boxShadow: '1px 1px 10px .25px black inset',
          color: 'black',
        }}>
        {/* <Text text={MdPerson} /> */}
        <MdList />
      </NavLink>
    </div>
  );
};
