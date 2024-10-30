import React from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="feed-container">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
