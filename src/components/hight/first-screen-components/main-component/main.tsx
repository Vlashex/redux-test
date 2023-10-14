import React from 'react';
import ButtonComponent from '../../../low/button-component';
import './main.scss'

const FirstScreenMain = () => {
    return (
        <section className='main'>
                <header>
                    <div>
                    <a href="">Главная</a>
                    <a href="">Тарифы</a>
                    <a href="">Контакты</a>
                    </div>
                    <div>
                    <a href="">Вход</a>
                    <a href="">Регистрация</a>
                    </div>
                </header>
                <div className='content'>
                    <h1>Conspectus</h1>
                    <h2>Умный помощник в<br />обучении</h2>
                    <p>
                        Структуризация лекции. <br />
                        Краткие заметки из видео,<br />фото, текста. <br />
                        Ответы на вопросы по <br />тексту. <br />
                        Создание ментальных карт<br />и инфографики контекста. <br />
                    </p>
                    <ButtonComponent border='1px solid #000' backgroundColor='none' borderRadius='0' content='Начать' padding='70px' margin='0 0 0 12px'/> 
                </div>
            </section>
    );
};

export default FirstScreenMain;