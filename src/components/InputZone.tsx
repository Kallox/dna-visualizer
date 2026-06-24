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
        setInputValue(value.toUpperCase());
    };

    return (
        <div className="dna-card flex flex-col gap-2 w-full max-w-4xl p-8">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Paste your sequence</h3>
                <span className={`text-sm font-mono ${inputValue.length > maxLength * 0.9 ? "text-red-500" : "text-gray-400"}`}>
                    {inputValue.length.toLocaleString()}/{maxLength.toLocaleString()}
                </span>
            </div>
            <textarea
                className="w-full h-36 p-4 border border-gray-200 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Paste your DNA sequence here (e.g., ATGCGATCGTAGCTAGCTAGCTAGCTAGC)..."
                onChange={(e) => handleInputChange(e.target.value)}
                value={inputValue}
                maxLength={maxLength}
                spellCheck={false}
            ></textarea>
            <div className="flex justify-end">
                <button
                    className="px-8 py-2.5 cursor-pointer bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => onButtonClick(inputValue)}
                    disabled={inputValue.length === 0}
                >
                    Visualize
                </button>
            </div>
        </div>
    );
};

export default InputZone;
