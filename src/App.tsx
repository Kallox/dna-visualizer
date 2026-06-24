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
            <header className="dna-header-gradient flex justify-between items-center px-8 py-5 shadow-lg align-middle">
                <div className="flex items-center gap-3">
                    <span className="text-2xl hidden sm:block">🧬</span>
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tight">
                    DNA Visualizer
                </h1>
                <nav className="flex items-center gap-4">
                    <ul>
                        <li>
                            <a
                                className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/10 hover:bg-white/20 text-white transition-all duration-200 backdrop-blur-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/Kallox/dna-visualizer"
                            >
                                <img
                                    src="/github.png"
                                    width={20}
                                    alt="Github icon"
                                />
                                <span className="font-semibold text-sm hidden sm:block">
                                    GitHub
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex flex-col gap-8 items-center min-h-screen p-8">
                <InputZone onButtonClick={handleSequenceChange} />
                {sequence && <DataVisualizationZone sequence={sequence} />}
            </main>
        </div>
    );
}

export default App;
