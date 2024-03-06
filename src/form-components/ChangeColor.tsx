import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        { label: "Red", value: "red" },
        { label: "Orange", value: "orange" },
        { label: "Yellow", value: "yellow" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
        { label: "Purple", value: "purple" },
        { label: "Pink", value: "pink" },
        { label: "Teal", value: "teal" }
    ];

    const [selectedColor, setSelectedColor] = useState("");

    const colorChanged = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <p>Change Color</p>
            {colors.map((color: { label: string; value: string }) => (
                <Form.Check
                    inline
                    key={color.value}
                    type="radio"
                    label={color.label}
                    checked={selectedColor === color.value}
                    onChange={colorChanged}
                    value={color.value}
                    style={{ backgroundColor: color.value }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: selectedColor
                }}
            >
                {selectedColor
                    ? `You have choosen: ${selectedColor}`
                    : "Select a color"}
            </div>
        </div>
    );
}
