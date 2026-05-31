
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { questions } from '../../assets/js/data';
import '../../assets/css/style.css';

function Riazy() {
    const [answers, setAnswers] = useState({});

    const handleOptionSelect = (questionId, optionValue) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: optionValue
        }));
    };

    return (
        <div className="app-container">
            <h2 className="main-title">۵. رشد سهم بازار</h2>
            <div className="questions-list">
                {questions.map(q => (
                    <QuestionCard
                        key={q.id}
                        question={q}
                        selectedOption={answers[q.id]} 
                        onOptionSelect={handleOptionSelect}
                    />
                ))}
            </div>
        </div>
    );
}

export default Riazy;
