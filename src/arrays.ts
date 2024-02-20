/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number: number): number => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((number: string): number =>
        isNaN(parseInt(number)) ? 0 : parseInt(number)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string): number => {
        const amountWithoutDollar: string = amount.startsWith("$")
            ? amount.slice(1)
            : amount;
        return isNaN(parseInt(amountWithoutDollar))
            ? 0
            : parseInt(amountWithoutDollar);
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((message: string): string | null => {
            if (message.endsWith("!")) {
                return message.toUpperCase();
            } else if (message.endsWith("?")) {
                return null;
            } else {
                return message;
            }
        })
        .filter(
            (message: string | null): message is string => message !== null
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newArray: string[] = words.filter(
        (word: string): boolean => word.length < 4
    );
    return newArray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        return colors.every(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        );
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (num1: number, num2: number): number => num1 + num2,
        0
    );
    const output: string = addends.join("+");
    return `${sum}=${output || "0"}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let foundNegative = false;

    const result: number[] = values.reduce(
        (numbers: number[], number: number): number[] => {
            if (!foundNegative && number < 0) {
                numbers.push(number);
                numbers.push(sum);
                foundNegative = true;
            } else {
                sum += number;
                numbers.push(number);
            }
            return numbers;
        },
        []
    );

    if (!foundNegative) {
        result.push(sum);
    }

    return result;
}
