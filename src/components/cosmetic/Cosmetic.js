import React from 'react';
import { addToDb, removeDb } from '../../utilities/fakeDb';

const Cosmetic = (props) => {
    //console.log(props.cosmetic);
    const {_id,name,price,gender}= props.cosmetic;
    //local db
    
    const handlPurchase = id =>{
    console.log(id);
    addToDb(id);
    }
    const removePurchase = id =>{
        removeDb(id);
    }
    return (
        <div>
            <h5>Name: {name}</h5>
            <p>Id : {_id}</p>
            <p>price: {price}</p>
            <p>gender: {gender}</p>
            <button onClick={ ()=>handlPurchase(_id)}>purchase</button>
            <button onClick={ ()=>removePurchase(_id)}> remove </button>
        </div>
    );
};

export default Cosmetic;