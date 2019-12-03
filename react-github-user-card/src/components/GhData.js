import React from 'react';
import GhCard from './GhCard'

const GhData = ({ userData }) => {
  console.log(userData);

  return (
    <div>
      <h1>GithubData Component</h1>
      <GhCard userCard={userData} />
    </div>
  );
};

export default GhData;