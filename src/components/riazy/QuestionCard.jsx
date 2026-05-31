
import React from 'react';
import { options } from '../../assets/js/data';
import '../../assets/css/style.css';

function QuestionCard({ question, selectedOption, onOptionSelect }) {
  return (
    <div className="question-card">
      <h3 className="question-text">{question.text}</h3>
      <div className="options-container">
        {options.map(option => (
          <button
            key={option.value}
            className={`option-button ${selectedOption === option.value ? 'selected' : ''}`}
            style={{ borderBottomColor: option.color }}
            onClick={() => onOptionSelect(question.id, option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
