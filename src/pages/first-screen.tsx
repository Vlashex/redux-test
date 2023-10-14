import React, { FC } from 'react';
import './first-screen.scss'
import FirstScreenMain from '../components/hight/first-screen-components/main-component/main';
import LearnFast from '../components/hight/first-screen-components/learn-fast-component/learn-fast';
import IntelligentProcessing from '../components/hight/first-screen-components/intelligent-processing-component/intelligent-processing';
import FirstScreenTariffs from '../components/hight/first-screen-components/tariffs-component/tariffs';


interface firstScreen {

}

const FirstScreen:FC<firstScreen> = () => {
    return (
        <section className='first-screen'>
            <FirstScreenMain/>
            <LearnFast/>
            <IntelligentProcessing/>
            <FirstScreenTariffs/>
        </section>
    );
};

export default FirstScreen;