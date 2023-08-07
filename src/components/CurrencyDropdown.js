import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const currencyName = (currency) => {
        switch(currency){
            case '$':
                return "Dollar";
            case '£':
                return "Pound";
            case '€':
                return "Euro";
            case '₹':
                return "Ruppee";
        }

    }

    const changeCurrency = (currency) => {
        const newCurrency = currency;

        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurrency
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                    <option defaultValue>Currency ({currency} {currencyName(currency)})</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
                </select>
            </span>
        </div>
    )
}

export default CurrencyDropdown