import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const buttonClicked = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={buttonClicked}>Reveal Answer</Button>
            {isVisible && <p>The answer is 42</p>}
        </div>
    );
}
