import React from 'react';
import { useState, useEffect } from 'react';
import AllMeals from '../AllMeals/AllMeals';
import './Meal.css';

const Meal = () => {
    // declair state
    const [meals, setMeals] = useState([]);
    //load data
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res=>res.json())
            .then(data=>setMeals(data.meals));
            // .then(data=>console.log(data.meals));
    }, []);

    return (
        <div className='meal'>
            <div>
                <h2>Food Details</h2>
                <h3>Total: {meals.length} </h3>
                <div className='meals'>
                    {
                        meals.map(meal=><AllMeals meal={meal}/>)
                    }
                </div>
            </div>
            <div>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Meal;