import React from 'react';
import './AllMeals.css'

const AllMeals = (props) => {
    
    const {strMeal, strCategory, strArea, strMealThumb, idMeal} = props.meal;
    const {handleBtn} = props;
    // const handleBtn = (idMeal)=>{
    //     console.log('addded', idMeal);
    // }
    return (
        <div>
            <div className='all-meal'>
                <img src={strMealThumb} alt="" />
                <h2>Meal Name: {strMeal}</h2>
                <h3>Meal Category: {strCategory}</h3>
                <h4>Meal Area: {strArea}</h4>
                <button onClick={()=>handleBtn(strMeal)} className='btn-cart'><p>Add to Cart</p></button>
            </div>

        </div>
    );
};

export default AllMeals;