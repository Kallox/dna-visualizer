import { useState } from "react";

type Props = {
    onButtonClick: (input: string) => void;
};

const InputZone = ({ onButtonClick }: Props) => {
    const [inputValue, setInputValue] = useState<string>("");

    const maxLength = 10000; // Maximum length for the input

    const handleInputChange = (value: string) => {
        if (value.length > maxLength) {
            alert(
                "Input exceeds 10,000 characters. Please shorten your sequence."
            );
            return;
        }
        setInputValue(value);
    };

    return (
        <div className="flex flex-col gap-2 w-full h-full p-8 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Paste your secuence</h3>
                <span className="text-sm text-gray-500">
                    {inputValue.length}/{maxLength} characters
                </span>
            </div>
            <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded-lg"
                placeholder="Paste your DNA sequence here..."
                onChange={(e) => handleInputChange(e.target.value)}
                value={inputValue}
                maxLength={maxLength}
            ></textarea>
            <button
                className="w-full p-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => onButtonClick(inputValue)}
            >
                Visualize
            </button>
        </div>
    );
};

export default InputZone;
