import React from 'react';
import './learn-fast.scss'
import ButtonComponent from '../../../low/button-component';

const LearnFast = () => {
    return (
        <section className='learn-fast'>
            <h3>Учитесь быстрее, легче и эффективнее!</h3>
            <div className='learn-fast-sheets'>
                <div>
                    <p>Экономия времени <br /> на учебу</p>
                    <span>до х3 раз</span>
                </div>
                <div className="line"/>
                <div>
                    <p>Экономия времени<br /> на подготовку</p>
                    <span>до x5 раз</span>
                </div>
                <div className="line"/>
                <div>
                    <p>Личный GPT-тьютор</p>
                    <span>24/7 с вами</span>
                </div>
            </div>
            <video src="">
            
            </video>
            <ButtonComponent border='none' backgroundColor='#EA3D2E' 
            borderRadius='5px' content='Зарегестрироваться и начать' 
            padding='30px' margin='20px auto 0 auto' color='#fff'/> 
        </section>
    );
};

export default LearnFast;