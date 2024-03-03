/* eslint-disable no-fallthrough */
/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidayList = [
    "🎄", // Christmas
    "🎃", // Halloween
    "🦃", // Thanksgiving
    "🇺🇸", // Independence Day
    "✝" // Easter
];

export function CycleHoliday(): JSX.Element {
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);

    const getNextIndex = (
        currentIndex: number,
        step: number,
        length: number
    ) => {
        return (currentIndex + step + length) % length;
    };

    const handleAdvanceAlphabetically = () => {
        setCurrentHolidayIndex(
            getNextIndex(currentHolidayIndex, 1, holidayList.length)
        );
    };

    const handleAdvanceByYear = () => {
        setCurrentHolidayIndex(
            getNextIndex(currentHolidayIndex, -1, holidayList.length)
        );
    };

    return (
        <div>
            <p>Holiday: {holidayList[currentHolidayIndex]}</p>
            <Button onClick={handleAdvanceAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={handleAdvanceByYear}>Advance by Year</Button>
        </div>
    );
}
