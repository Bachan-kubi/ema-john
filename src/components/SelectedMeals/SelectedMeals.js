import React from 'react';

const SelectedMeals = (props) => {
    return (
        <div>
            <ul>
                <li>Selected Meals: {props.selected}</li>
            </ul>
        </div>
    );
};

export default SelectedMeals;