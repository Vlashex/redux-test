import React, { FC } from 'react';
import './PizzaCard.scss'
import { useDispatch } from 'react-redux';

interface PizzaCartProps {
    img_url: string;
    name: string;
    content: string;
    price: string;
}

const PizzaCart:FC<PizzaCartProps> = ({img_url, name, content, price}) => {
    const dispatch = useDispatch()

    const deleteCart = (Pizza:string) => {
        dispatch({type: "DELETE_CART", payload: Pizza})
    }

    return (
        <div className='PizzaCart' onClick={()=>{
            deleteCart(name);
        }}>
            <img src={img_url} alt="" />
            <h2>{name}</h2>
            <p>{content}</p>
            <span>{price}</span>
        </div>
    );
};

export default PizzaCart;