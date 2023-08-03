import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';





const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);

    //function to increase budget by 10
    const increaseBudget = (name) => {
        const increase = budget + 10;

    dispatch({
        type: 'SET_BUDGET',
        payload: increase
    });

    }

    
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: £{budget}
                {/* <button onClick={increaseBudget}>+</button> */}
            </span>
        </div>
    );
};

export default Budget;
