// Home.js
import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <RecipeList />
      <RecipeDetails />
    </div>
  );
};

export default Home;
