import { useState } from "react";
import DataVisualizationZone from "./components/DataVisualizationZone";
import InputZone from "./components/InputZone";

function App() {
    const [sequence, setSequence] = useState("");

    const handleSequenceChange = (newSequence: string) => {
        setSequence(newSequence);
    };

    return (
        <div>
            <header className="flex justify-between p-8 border-b-1 bg-gray-100 align-middle">
                <div></div>
                <h1 className="text-3xl font-bold underline text-center">
                    DNA Visualizer
                </h1>
                <nav className="flex items-center gap-4">
                    <ul>
                        <li>
                            <a
                                className="flex items-center gap-2 rounded-md p-2 bg-gray-200 hover:bg-gray-300 transition duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/Kallox/dna-visualizer"
                            >
                                <img
                                    src="/github.png"
                                    width={24}
                                    alt="Github icon"
                                />
                                <span className="font-semibold hidden sm:block">
                                    GitHub
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex flex-col gap-8 items-center min-h-screen bg-gray-100 p-8">
                <InputZone onButtonClick={handleSequenceChange} />
                <DataVisualizationZone sequence={sequence} />
            </main>
        </div>
    );
}

export default App;
