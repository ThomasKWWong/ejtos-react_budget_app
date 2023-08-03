import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency } = useContext(AppContext);

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

    return (
        <select className="custom-select" id="inputGroupSelect01">
            <option defaultValue>Currency ({currency} {currencyName(currency)})</option>
            <option value="Dollar" name="dollar">$ Dollar</option>
            <option value="Pound" name="pound">£ Pound</option>
            <option value="Euro" name="euro">€ Euro</option>
            <option value="Ruppee" name="ruppee">₹ Ruppee</option>
        </select>
    )
}

export default CurrencyDropdown