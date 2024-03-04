import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    colorIndex: number;
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

function ChangeColor({ colorIndex, setColorIndex }: ChangeColorProps) {
    const handleClick = () => {
        setColorIndex((colorIndex + 1) % COLORS.length);
    };

    return <Button onClick={handleClick}>Next Color</Button>;
}

interface ColorPreviewProps {
    colorIndex: number;
}

function ColorPreview({ colorIndex }: ColorPreviewProps) {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox() {
    const [colorIndex, setColorIndex] = useState(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <p>Colored Box</p>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
                <ColorPreview colorIndex={colorIndex} />
            </div>
        </div>
    );
}
