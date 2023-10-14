import React from 'react';
import Tariff from '../../../low/tariff-component';
import './tariffs.scss'

const FirstScreenTariffs = () => {

    const tariffsList = [1,2,3,4]

    return (
        <section className='first-screen-tariffs'>
            <h3>Тарифы</h3>
            <div className="tariffs-list">
                {
                    tariffsList.map(()=> {return (<Tariff/>)})
                }
            </div>
        </section>
    );
};

export default FirstScreenTariffs;