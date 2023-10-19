import React, {ReactNode } from 'react';
import './FirstScreen.scss'
import PizzaCard from '../components/PizzaCard'; 
import { useSelector } from 'react-redux';
import PizzaCart from '../components/PizzaCart';


const FirstScreen = ():ReactNode | null => {

    const pizza = useSelector(function (state:any) {
            return state.repos.pizza;
        })
    const cart = useSelector(function (state:any) {
        return state.cart.cart;
    })
    

    return (
        <section className='first-screen'>
            <header>
                <h1>Меню пиццы Италии</h1>
            </header>
            <div className="pizza-menu">
                {
                    pizza.map((element:any)=>{
                        return <PizzaCard key={element.name} {...element}/>
                    })
                }
            </div>
            <div className="cart">
                {
                    cart.lenght === 0
                    ? null
                    :cart.map((element:any)=>{
                        return <PizzaCart key={element.name} {...element}/>
                    })
                }
            </div>
        </section>
    );
};

export default FirstScreen;