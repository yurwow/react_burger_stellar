import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <>
      <AppHeader/>
      <div style={{display: "flex"}}>
          <BurgerIngredients/>
          <BurgerConstructor/>
      </div>
    </>
  );
}

export default App;
