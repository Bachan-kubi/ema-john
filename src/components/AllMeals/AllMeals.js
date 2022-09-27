import React from 'react';
import './AllMeals.css'

const AllMeals = (props) => {
    const {strMeal, strCategory, strArea, strMealThumb} = props.meal
    return (
        <div>
            <div className='all-meal'>
                <img src={strMealThumb} alt="" />
                <h2>Meal Name: {strMeal}</h2>
                <h3>Meal Category: {strCategory}</h3>
                <h4>Meal Area: {strArea}</h4>
            </div>
            <div>
                <button className='btn-cart'><p>Add to Cart</p></button>
            </div>
        </div>
    );
};

export default AllMeals;