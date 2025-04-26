import { useState } from "react";

type Props = {
    onButtonClick: (input: string) => void;
};

const InputZone = ({ onButtonClick }: Props) => {
    const [inputValue, setInputValue] = useState<string>("");

    return (
        <div className="flex flex-col gap-2 w-full h-full p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Paste your secuence</h3>
            <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded-lg"
                placeholder="Paste your DNA sequence here..."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            ></textarea>
            <button
                className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => onButtonClick(inputValue)}
            >
                Visualize
            </button>
        </div>
    );
};

export default InputZone;
