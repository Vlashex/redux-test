import React from 'react';
import './intelligent-processing.scss'

const IntelligentProcessing = () => {
    return (
        <section className='intelligent-processing'>
            <h3>Интеллектуальная обработка учебных материалов</h3>
            <ul>
                <li>Нейросеть распознает doc, audio, pdf, jpg, mp4</li>
                <li>Выделяет главное, структурирует информацию</li>
                <li>Выдает результат в краткой наглядной форме</li>
                <li>GPT-тьютор отвечает на вопросы по загруженным материалам</li>
            </ul>
        </section>
    );
};

export default IntelligentProcessing;