import React from 'react';
import './SelectedMeals.css'

const SelectedMeals = (props) => {
    return (
        <div className='selected-meal' >
            <h3>Selected Meals</h3>
            <hr />
            <h4>{props.selected}</h4>
        </div>
    );
};

export default SelectedMeals;