import React, { FC } from 'react';
import './PizzaCard.scss'
import { useDispatch } from 'react-redux';

interface PizzaCardProps {
    img_url: string;
    name: string;
    content: string;
    price: string;
}

const PizzaCard:FC<PizzaCardProps> = ({img_url, name, content, price}) => {
    const dispatch = useDispatch()

    const deletePizza = (Pizza:string) => {
        dispatch({type: "DELETE_PIZZA", payload: Pizza})
    }
    const addCart = (Cart:Object) => {
        dispatch({type: "ADD_TO_CART", payload: Cart})
    }

    return (
        <div className='PizzaCard' onClick={()=>{
            deletePizza(name);
            addCart({
                "img_url": img_url,
                "name": name,
                "content": content,
                "price": price
            })
        }}>
            <img src={img_url} alt="" />
            <h2>{name}</h2>
            <p>{content}</p>
            <span>{price}</span>
        </div>
    );
};

export default PizzaCard;