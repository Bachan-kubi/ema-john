import React from "react";
import { useState, useEffect } from "react";
import AllMeals from "../AllMeals/AllMeals";
import SelectedMeals from "../SelectedMeals/SelectedMeals";
import "./Meal.css";

const Meal = () => {
  // declair state
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  //load data
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
    // .then(data=>console.log(data.meals));
  }, []);

//   handle btn click
  const handleBtn=(strMeal)=>{
    setCart(strMeal);
  };

  return (
    <div className="meal">
      <div>
        <h2>Food Details</h2>
        <h3>Total: {meals.length} </h3>
        <div className="meals">
          {meals.map((meal) => (
            <AllMeals 
                meal={meal} 
                handleBtn = {handleBtn}
                key={meal.idMeal}
            />
          ))}
        </div>
      </div>
      <div className="order-container">
        <div className="order">
          <h2>Order Summary</h2>
          {/* <h4>Selected Meals: {cart}</h4> */}
          <SelectedMeals selected = {cart}/>
        </div>
      </div>
    </div>
  );
};

export default Meal;
