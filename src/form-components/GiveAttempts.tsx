import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const useAttempt = () => {
        if (attemptsRemaining > 0) {
            setAttemptsRemaining(attemptsRemaining - 1);
        }
    };

    const addAttempt = () => {
        const attempts = parseInt(requestedAttempts);
        if (!isNaN(attempts)) {
            setAttemptsRemaining(attemptsRemaining + attempts);
            setRequestedAttempts("");
        }
    };

    const inputChanged = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <p>Give Attempts</p>
            <p>Attempts left: {attemptsRemaining}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={inputChanged}
                placeholder="Enter number of attempts"
            />
            <Button onClick={useAttempt} disabled={attemptsRemaining === 0}>
                Use
            </Button>
            <Button onClick={addAttempt}>Gain</Button>
        </div>
    );
}
