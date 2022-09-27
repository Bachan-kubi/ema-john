import React from 'react';

const SelectedMeals = (props) => {
    return (
        <div className='selected-meal'>
            <h5>Selected Meals: <h2>{props.selected}</h2></h5>
        </div>
    );
};

export default SelectedMeals;