import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState(options[0]);
    const [isCorrect, setIsCorrect] = useState(false);

    const selectedAnswerChanged = (event: { target: { value: string } }) => {
        const selectedOption = event.target.value;
        setSelectedAnswer(selectedOption);
        setIsCorrect(selectedOption === expectedAnswer);
    };

    return (
        <div>
            <p>Multiple Choice Question</p>
            <select value={selectedAnswer} onChange={selectedAnswerChanged}>
                {options.map((option: string, index: number) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? (
                <span style={{ color: "green" }}>✔️</span>
            ) : (
                <span style={{ color: "red" }}>❌</span>
            )}
        </div>
    );
}
