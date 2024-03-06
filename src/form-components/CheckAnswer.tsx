import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const processAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setAnswer(value);
        setIsCorrect(value === expectedAnswer);
    };

    return (
        <div>
            <p>Check Answer</p>
            <input
                type="text"
                value={answer}
                onChange={processAnswer}
                placeholder="Enter your answer"
            />
            {isCorrect ? (
                <span style={{ color: "green" }}>✔️</span>
            ) : (
                <span style={{ color: "red" }}>❌</span>
            )}
        </div>
    );
}
