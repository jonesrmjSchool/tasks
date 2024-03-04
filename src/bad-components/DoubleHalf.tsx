import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);

    const handleDouble = () => {
        setValue(value * 2);
    };

    const handleHalve = () => {
        setValue(value / 2);
    };

    return (
        <div>
            <p>Double Half</p>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Button onClick={handleDouble}>Double</Button>
            <Button onClick={handleHalve}>Halve</Button>
        </div>
    );
}
