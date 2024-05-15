import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RecipeList from './component/RecipeList';
import RecipeDetails from './component/RecipeDetails';
import Navbar from "./component/Navbar"
import { Route, Routes } from 'react-router-dom';
import Favroite from './component/Favroite';
import Home from './component/Home';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/favroite' element={<Favroite />} />
        </Routes>
        {/* <RecipeList />
        <RecipeDetails /> */}
      </div>
    </Provider>
  );
};

export default App;
