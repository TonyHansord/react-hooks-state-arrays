import React, { useState } from 'react';
import { spicyFoods, getNewRandomSpicyFood } from '../data';

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilter] = useState('All');

  const filteredFoods = foods.filter((food) => {
    if (filterBy === 'All') {
      return true;
    } else {
    }
    return food.cuisine === filterBy;
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    console.log(newFood);
    setFoods(newFoodArray);
  }

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  function handleLiClick(item) {
    const newFoodArray = foods.map((food) => {
      if (food.id === item) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  const foodList = filteredFoods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>

      <div>
        <select name="filter" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>

      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
